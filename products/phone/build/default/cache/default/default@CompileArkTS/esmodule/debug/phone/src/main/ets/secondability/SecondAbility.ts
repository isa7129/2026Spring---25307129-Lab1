import display from "@ohos:display";
import type window from "@ohos:window";
import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import UIAbility from "@ohos:app.ability.UIAbility";
import type Want from "@ohos:app.ability.Want";
import hilog from "@ohos:hilog";
import deviceInfo from "@ohos:deviceInfo";
import { CommonConstants, Logger, WindowUtil } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/Index";
export default class SecondAbility extends UIAbility {
    private windowObj?: window.Window;
    private windowUtil?: WindowUtil;
    private mainWindow?: window.Window;
    private onWindowSizeChange: (windowSize: window.Size) => void = (windowSize: window.Size) => {
        this.windowUtil?.updateBreakpoint(windowSize.width);
        AppStorage.setOrCreate('windowWidth', windowSize.width);
    };
    private onFoldStatusChange: (foldStatus: display.FoldStatus) => void = (foldStatus: display.FoldStatus) => {
        if (canIUse('SystemCapability.Window.SessionManager')) {
            let isSplitMode: boolean | undefined = AppStorage.get('isSplitMode');
            if (foldStatus === display.FoldStatus.FOLD_STATUS_FOLDED && isSplitMode) {
                this.context.terminateSelf();
            }
        }
    };
    onCreate(_want: Want, _launchParam: AbilityConstant.LaunchParam): void {
        this.windowUtil = WindowUtil.getSecondInstance();
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    }
    onDestroy(): void {
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
        if (canIUse('SystemCapability.Window.SessionManager')) {
            try {
                display.off('foldStatusChange');
            }
            catch (exception) {
                Logger.error('Failed to off display. Code: ' + JSON.stringify(exception));
            }
        }
        if (this.windowUtil === undefined) {
            return;
        }
        this.mainWindow = this.windowUtil.getMainWindow();
        if (this.mainWindow === undefined) {
            return;
        }
        try {
            this.mainWindow.off('windowSizeChange');
        }
        catch (exception) {
            Logger.error('Failed to unregister the window callback. Code: ' + JSON.stringify(exception));
        }
    }
    async onWindowStageCreate(windowStage: window.WindowStage): Promise<void> {
        // Main window is created, set main page for this ability
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');
        windowStage.getMainWindow().then((data: window.Window) => {
            this.windowObj = data;
            this.windowUtil?.updateBreakpoint(this.windowObj.getWindowProperties().windowRect.width);
            AppStorage.setOrCreate('windowWidth', this.windowObj.getWindowProperties().windowRect.width);
            this.windowObj.on('windowSizeChange', this.onWindowSizeChange);
        }).catch((err: BusinessError<Error>) => {
            hilog.info(0x0000, 'testTag', `Failed to getMainWindow. Cause: ${err.code}, message: ${err.message}`);
        });
        if (canIUse('SystemCapability.Window.SessionManager')) {
            try {
                display.on(`foldStatusChange`, this.onFoldStatusChange);
            }
            catch (exception) {
                Logger.error('Failed to display on. Code: ' + JSON.stringify(exception));
            }
        }
        windowStage.loadContent('pages/Index', async (err, data) => {
            if (err.code) {
                hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
                return;
            }
            hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
            if (this.windowUtil !== undefined) {
                this.windowUtil.setWindowStage(windowStage);
                await this.windowUtil.setMainWindow();
                if (deviceInfo.deviceType !== CommonConstants.DEVICE_TYPES[0]) {
                    this.windowUtil.setFullScreen();
                }
                if (!AppStorage.get('topRectHeight')) {
                    this.windowUtil.setAvoidRectHeight(windowStage.getMainWindowSync().getUIContext());
                }
            }
        });
    }
    onWindowStageDestroy(): void {
        // Main window is destroyed, release UI related resources
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
    }
    onForeground(): void {
        // Ability has brought to foreground
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
    }
    onBackground(): void {
        // Ability has back to background
        hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
    }
}
