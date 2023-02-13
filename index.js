"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = exports.kernel = void 0;
// @ts-ignore
const kernelNApi = __importStar(require("./build/Release/kerneljs.node"));
exports.kernel = kernelNApi;
exports.keys = {
    key: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        e: "e",
        f: "f",
        g: "g",
        h: "h",
        i: "i",
        j: "j",
        k: "k",
        l: "l",
        m: "m",
        n: "n",
        o: "o",
        p: "p",
        q: "q",
        r: "r",
        s: "s",
        t: "t",
        u: "u",
        v: "v",
        w: "w",
        x: "x",
        y: "y",
        z: "z",
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        backspace: "backspace",
        delete: "delete",
        enter: "enter",
        tab: "tab",
        escape: "escape",
        up: "up",
        down: "down",
        right: "right",
        left: "left",
        home: "home",
        end: "end",
        pageup: "pageup",
        pagedown: "pagedown",
        f1: "f1",
        f2: "f2",
        f3: "f3",
        f4: "f4",
        f5: "f5",
        f6: "f6",
        f7: "f7",
        f8: "f8",
        f9: "f9",
        f10: "f10",
        f11: "f11",
        f12: "f12",
        command: "command",
        alt: "alt",
        control: "control",
        shift: "shift",
        right_shift: "right_shift",
        space: "space",
        printscreen: "printscreen",
        insert: "insert",
        audio_mute: "audio_mute",
        audio_vol_down: "audio_vol_down",
        audio_vol_up: "audio_vol_up",
        audio_play: "audio_play",
        audio_stop: "audio_stop",
        audio_pause: "audio_pause",
        audio_prev: "audio_prev",
        audio_next: "audio_next",
        audio_rewind: "audio_rewind",
        audio_forward: "audio_forward",
        audio_repeat: "audio_repeat",
        audio_random: "audio_random",
        numpad_0: "numpad_0",
        numpad_1: "numpad_1",
        numpad_2: "numpad_2",
        numpad_3: "numpad_3",
        numpad_4: "numpad_4",
        numpad_5: "numpad_5",
        numpad_6: "numpad_6",
        numpad_7: "numpad_7",
        numpad_8: "numpad_8",
        numpad_9: "numpad_9",
    },
    modifier: {
        alt: "alt",
        command: "command",
        win: "win",
        control: "control",
        shift: "shift",
    },
};
