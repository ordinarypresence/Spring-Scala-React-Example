package com.github.ordinarypresence.controller

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.{RequestMapping, ResponseBody}

@Controller
class HomeController {

  @RequestMapping(Array("/*"))
  def home(model: Model) = {
    "forward:/resources/index.html"
  }
}
