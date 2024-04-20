import { MMKV } from "react-native-mmkv";

import { TOKEN } from "../enums/tokens";

export const storage = new MMKV({ id: TOKEN.APP_NAME });
