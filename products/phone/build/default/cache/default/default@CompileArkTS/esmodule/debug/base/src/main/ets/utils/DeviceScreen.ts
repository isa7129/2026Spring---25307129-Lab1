import display from "@ohos:display";
import hilog from "@ohos:hilog";
import { CommonConstants } from "@bundle:com.huawei.multishoppingpricecomparison/phone@base/ets/constants/CommonConstants";
export class DeviceScreen {
    /**
     * Get the screen height.
     *
     * @returns screen height.
     */
    public static getDeviceHeight(): number {
        try {
            let displayObject = display.getDefaultDisplaySync();
            let screenPixelHeight = displayObject.height;
            let screenDensityDPI = displayObject.densityDPI;
            return screenPixelHeight * (CommonConstants.SCREEN_DPI_CONSTANT / screenDensityDPI);
        }
        catch (error) {
            hilog.error(0x0000, 'Device', `getDeviceHeight catch error, code: ${error.code}, message: ${error.message}`);
            return 0;
        }
    }
    /**
     * Get the screen width.
     *
     * @returns screen width.
     */
    public static getDeviceWidth(): number {
        try {
            let displayObject = display.getDefaultDisplaySync();
            let screenPixelWidth = displayObject.width;
            let screenDensityDPI = displayObject.densityDPI;
            return screenPixelWidth * (CommonConstants.SCREEN_DPI_CONSTANT / screenDensityDPI);
        }
        catch (error) {
            hilog.error(0x0000, 'Device', `getDeviceWidth catch error, code: ${error.code}, message: ${error.message}`);
            return 0;
        }
    }
}
