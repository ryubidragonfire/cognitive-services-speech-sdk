// copyright (c) Microsoft. All rights reserved.
// licensed under the MIT license. See LICENSE.md file in the project root for full license information.
//

import * as sdk from "../../../../../source/bindings/js/Speech.Browser.Sdk";

export class ByteBufferAudioFile {
    public static Load(buffer: Uint8Array): File {

        const parts: ArrayBuffer[] = [buffer.buffer];
        const file: File = new File(parts, "file.wav");

        return file;
    }
}
