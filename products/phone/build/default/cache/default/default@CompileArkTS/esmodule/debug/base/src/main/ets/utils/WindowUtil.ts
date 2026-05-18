import display from "@ohos:display";
import window from "@ohos:window";
import type { BusinessError } from "@ohos:base";
import hilog from "@ohos:hilog";
import { BreakpointConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/ets/constants/BreakpointConstants";
import { CommonConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/ets/constants/CommonConstants";
import Logger from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/ets/utils/Logger";
export class WindowUtil {
    private windowStage?: window.WindowStage;
    private mainWindowClass?: window.Window;
    static getInstance(): WindowUtil | undefined {
        if (!AppStorage.get<WindowUtil>(CommonConstants.WINDOW_UTIL_LIST[0])) {
            AppStorage.setOrCreate(CommonConstants.WINDOW_UTIL_LIST[0], new WindowUtil());
        }
        return AppStorage.get<WindowUtil>(CommonConstants.WINDOW_UTIL_LIST[0]);
    }
    static getSecondInstance(): WindowUtil | undefined {
        if (!AppStorage.get<WindowUtil>(CommonConstants.WINDOW_UTIL_LIST[1])) {
            AppStorage.setOrCreate(CommonConstants.WINDOW_UTIL_LIST[1], new WindowUtil());
        }
        return AppStorage.get<WindowUtil>(CommonConstants.WINDOW_UTIL_LIST[1]);
    }
    setWindowStage(windowStage: window.WindowStage): void {
        this.windowStage = windowStage;
    }
    async setMainWindow(): Promise<void> {
        if (this.windowStage === undefined) {
            Logger.error(`WindowStage is undefined`);
            return;
        }
        // Obtain the main window of the application.
        await this.windowStage.getMainWindow().then((windowClass: window.Window) => {
            this.mainWindowClass = windowClass;
        }).catch((err: BusinessError) => {
            Logger.error(`Failed to obtain the main window. Code:${err.code}, message:${err.message}`);
        });
    }
    getMainWindow(): window.Window | undefined {
        return this.mainWindowClass;
    }
    setFullScreen(): void {
        if (this.mainWindowClass === undefined) {
            Logger.error(`MainWindowClass is undefined`);
            return;
        }
        // Set full-screen display.
        this.mainWindowClass.setWindowLayoutFullScreen(true).then(() => {
            Logger.info('Succeeded in setting the window layout to full-screen mode.');
        }).catch((error: BusinessError) => {
            Logger.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(error));
        });
    }
    setAvoidRectHeight(uiContext: UIContext): void {
        if (this.mainWindowClass === undefined) {
            Logger.error(`MainWindowClass is undefined`);
            return;
        }
        try {
            let topHeight: number = this.mainWindowClass.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM).topRect.height;
            AppStorage.setOrCreate('topRectHeight', uiContext?.px2vp(topHeight));
        }
        catch (error) {
            hilog.error(0x0000, 'windowUtil', `setAvoidRectHeight catch error, code: ${error.code}, message: ${error.message}`);
        }
    }
    updateBreakpoint(windowWidth: number): void {
        try {
            let windowWidthVp = windowWidth / display.getDefaultDisplaySync().densityPixels;
            let curBp: string = '';
            if (windowWidthVp < BreakpointConstants.BREAKPOINT_RANGES[1]) {
                curBp = BreakpointConstants.BREAKPOINT_SM;
            }
            else if (windowWidthVp < BreakpointConstants.BREAKPOINT_RANGES[2]) {
                curBp = BreakpointConstants.BREAKPOINT_MD;
            }
            else {
                curBp = BreakpointConstants.BREAKPOINT_LG;
            }
            AppStorage.setOrCreate('currentBreakpoint', curBp);
        }
        catch (error) {
            hilog.error(0x0000, 'windowUtil', `updateBreakpoint catch error, code: ${error.code}, message: ${error.message}`);
        }
    }
    updateWindowStatusType(windowStatusType: window.WindowStatusType): void {
        if (canIUse('SystemCapability.Window.SessionManager')) {
            let isSplitMode: boolean = false;
            if (windowStatusType === window.WindowStatusType.SPLIT_SCREEN) {
                isSplitMode = true;
            }
            AppStorage.setOrCreate('isSplitMode', isSplitMode);
        }
    }
}
