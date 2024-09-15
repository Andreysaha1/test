// Defines
const SYMBOLS = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?\"\`\'#()[].,_- \n'.split('');
const FAPI = window.fapi;
const ModalHandler = FAPI.imodules.ModalHandler;
const ChunkUpdates = FAPI.routes.ChunkUpdates;

const mod = FAPI.registerMod('test');

// region arrow
const arrow = mod.registerArrow(0);
arrow.name = ['arrow'];
arrow.icon_url = "https://raw.githubusercontent.com/Andreysaha1/test/main/images.jfif";
