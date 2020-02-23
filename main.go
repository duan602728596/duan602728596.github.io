package main

import (
  "fmt"
  "syscall/js"
  solaySystem "solar-system/src/solarSystem"
)

func main()  {
  done := make(chan struct{})

  global := js.Global()
  globalSolaySystem := global.Get("__SOLAR_SYSTEM__")

  globalSolaySystem.Set("SolarSystem", js.FuncOf(solaySystem.SolarSystem))

  fmt.Println("Solar-system -> wasm ready.")

  <- done
}