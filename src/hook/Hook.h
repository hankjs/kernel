#pragma once

#include <os.h>
#include <winuser.h>

class Hook
{
private:
  static HHOOK keyboardID;
  static HHOOK mouseID;
  
public:
  static void hookKeyboard();
  static void unhookKeyboard();

  static void hookMouse();
  static void unhookMouse();

};
