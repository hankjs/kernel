#ifndef KERNELJS_CONSOLE
#define KERNELJS_CONSOLE

#include <napi.h>

#define JSError(env, str)                                        \
    Napi::TypeError::New(env, str).ThrowAsJavaScriptException(); \
    return Napi::Number::New(env, 0)

#endif