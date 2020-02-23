package main

import (
  "fmt"
  "syscall/js"
  solarSystem "solar-system/src/solarSystem"
)

func main()  {
  done := make(chan struct{})

  global := js.Global()
  globalSolarSystem := global.Get("__SOLAR_SYSTEM__")

  globalSolarSystem.Set("SolarSystem", js.FuncOf(solarSystem.SolarSystem))

  fmt.Println("Solar-system -> wasm ready.")

  <- done
}