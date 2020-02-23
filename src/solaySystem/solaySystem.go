package solaySystem

import (
  "syscall/js"
  "math"
)

/* 定义变量 */
var (
  element js.Value
  THREE js.Value
  jQuery js.Value
  options js.Value
  scene js.Value    // 场景
  camera js.Value   // 照相机
  renderer js.Value // 渲染器
  controls js.Value // 控制器
  star map[string] js.Value = map[string] js.Value {}
  timer js.Value
)


/* 初始化场景 */
func sceneInit() {
  scene = THREE.Get("Scene").New()
}

/* 初始化照相机 */
func cameraInit()  {
  aspect := element.Get("clientWidth").Float() / element.Get("clientHeight").Float()

  camera = THREE.Get("PerspectiveCamera").New(60, aspect, 1, math.Pow(10, 10))
}

/* 初始化渲染器 */
func rendererInit()  {
  renderer = THREE.Get("WebGLRenderer").New()

  renderer.Call("setSize", element.Get("clientWidth").Int(), element.Get("clientHeight").Int())
  renderer.Call("clear", 0x000000)
  element.Call("appendChild", renderer.Get("domElement"))
}

/* 窗口改变事件 */
func handleWindowResize(this js.Value, args []js.Value) interface {} {
  position := camera.Get("position")
  x := position.Get("x").Float()
  y := position.Get("y").Float()
  z := position.Get("z").Float()

  cameraInit();
  camera.Get("position").Call("set", x, y, z);

  cameraLookAtArgs := map [string] interface{} { "x": 0, "y": 0, "z": 0, }

  camera.Call("lookAt", js.ValueOf(cameraLookAtArgs))
  renderer.Call("setSize", element.Get("clientWidth").Int(), element.Get("clientHeight").Int())
  controlsInit()

  return nil
}

/* 初始化控制器 */
func controlsInit()  {
  controls = THREE.Get("OrbitControls").New(camera, element)
}

/* 初始化环境光 */
func initAmbientLight()  {
  light := THREE.Get("AmbientLight").New(0x8f8f8f)

  scene.Call("add", light)
}

/* 初始化太阳 */
func sunInit() {
  geometry := THREE.Get("SphereGeometry").New(64, 100, 100)
  loader := THREE.Get("TextureLoader").New()
  materialArgs := map [string] interface{} {
   "emissive": 0xe65f05,
   "map": loader.Call("load", options.Get("sun").Get("material")),
   "side": THREE.Get("DoubleSide"),
   "color": 0xffffff,
  }
  material := THREE.Get("MeshLambertMaterial").New(js.ValueOf(materialArgs))
  star["sun"] = THREE.Get("Mesh").New(geometry, material)

  scene.Call("add", star["sun"])
  star["sun"].Get("position").Call("set", 0, 0, 0)

  // 太阳光
  light := THREE.Get("PointLight").New(0xffffff, 1, 350)

  light.Get("position").Call("set", 0, 0, 0)
  scene.Call("add", light)
}

/* 初始化行星 */
func planetsInit()  {
  planets := options.Get("planets")
  planetsLength := planets.Get("length").Int()
  loader := THREE.Get("TextureLoader").New()

  for i := 0; i < planetsLength; i++ {
    planet := planets.Index(i)
    name := planet.Get("name").String()
    position := planet.Get("position")
    geometry := THREE.Get("SphereGeometry").New(planet.Get("r"), 100, 100)
    materialArgs := map [string] interface{} {
     "map": loader.Call("load", planet.Get("map")),
     "side": THREE.Get("DoubleSide"),
    }
    material := THREE.Get("MeshLambertMaterial").New(js.ValueOf(materialArgs))
    star[name] = THREE.Get("Mesh").New(geometry, material);

    scene.Call("add", star[name])
    star[name].Get("position").Call("set", position.Get("x"), position.Get("y"), position.Get("z"))
  }
}

/* 初始化行星环 */
func planetsRingInit()  {
  planetsRings := options.Get("rings")
  planetsRingsLength := planetsRings.Get("length").Int()
  loader := THREE.Get("TextureLoader").New()

  for i := 0; i < planetsRingsLength; i++ {
    ring := planetsRings.Index(i)
    name := ring.Get("name").String()
    r := ring.Get("r")
    rotation := ring.Get("rotation")
    geometry := THREE.Get("CylinderGeometry").New(r.Get("min"), r.Get("max"), 0, 100, 100, true)
    materialArgs := map [string] interface{} {
      "map": loader.Call("load", ring.Get("map")),
      "side": THREE.Get("DoubleSide"),
    }
    material := THREE.Get("MeshLambertMaterial").New(js.ValueOf(materialArgs))
    star[name] = THREE.Get("Mesh").New(geometry, material);

    scene.Call("add", star[name])

    x := rotation.Get("x")
    y := rotation.Get("y")
    z := rotation.Get("z")

    star[name].Get("rotation").Call("set", x, y, z)
    star[ring.Get("father").String()].Get("rotation").Call("set", x, y, z)
  }
}

/* 初始化宇宙背景 */
func universeInit()  {
  PIC2 := math.Pi / 2
  r := 1920 / 2
  loader := THREE.Get("TextureLoader").New()
  geometr := THREE.Get("PlaneGeometry").New(r * 2, r * 2, 1, 1)
  materialArgs0 := map [string] interface{} {
    "map": loader.Call("load", "image/bg0.jpg"),
    "side": THREE.Get("DoubleSide"),
  }
  materialArgs1 := map [string] interface{} {
    "map": loader.Call("load", "image/bg1.jpg"),
    "side": THREE.Get("DoubleSide"),
  }
  material := [2] js.Value {
    THREE.Get("MeshBasicMaterial").New(js.ValueOf(materialArgs0)),
    THREE.Get("MeshBasicMaterial").New(js.ValueOf(materialArgs1)),
  }
  universe := [6] js.Value {}

  for i := 0; i < 6; i++ {
    universe[i] = THREE.Get("Mesh").New(geometr, material[i % 2])
    scene.Call("add", universe[i])
  }

  // 正面
  universe[0].Get("position").Call("set", 0, 0, r)

  // 反面
  universe[2].Get("position").Call("set", 0, 0, -r)

  // 左面
  universe[5].Get("position").Call("set", -r, 0, 0)
  universe[5].Get("rotation").Call("set", 0, PIC2, 0)

  // 右面
  universe[4].Get("position").Call("set", r, 0, 0)
  universe[4].Get("rotation").Call("set", 0, PIC2, 0)

  // 上面
  universe[3].Get("position").Call("set", 0, r, 0)
  universe[3].Get("rotation").Call("set", PIC2, 0, 0)

  // 下面
  universe[1].Get("position").Call("set", 0, -r, 0)
  universe[1].Get("rotation").Call("set", PIC2, 0, 0)
}

func motionInit()  {
  rotations := options.Get("rotations")
  rotationsLength := rotations.Get("length").Int()
  PI2 := 2 * math.Pi;

  for i := 0; i < rotationsLength; i++ {
    rotation := rotations.Index(i)
    name := rotation.Get("name").String()

    // 自转
    y := star[name].Get("rotation").Get("y").Float()
    rot := y + rotation.Get("rot").Float()

    if rot >= PI2 {
      rot = 0
    }

    star[name].Get("rotation").Set("y", rot)

    // 公转
    deg := rotation.Get("deg").Float() + rotation.Get("rev").Float()

    if deg >= PI2 {
      deg = 0
    }

    rotation.Set("deg", deg)

    // 位置
    l := rotation.Get("l").Float()
    star[name].Get("position").Call("set", l * math.Sin(deg), 0, l * math.Cos(deg))
  }
}

func animate(this js.Value, args []js.Value) interface {} {
  renderer.Call("clear")
  motionInit()
  renderer.Call("render", scene, camera)
  timer = js.Global().Call("requestAnimationFrame", js.FuncOf(animate))

  return nil
}

func SolarSystem(this js.Value, args []js.Value) interface {} {
  /* =============================== */
  // 参数
  THREE = args[0]        // three.js
  jQuery = args[1]       // jquery
  el := args[2].String() // dom
  options = args[3]      // 配置项
  /* =============================== */

  global := js.Global()
  element = jQuery.Invoke(el).Index(0)

  sceneInit()
  cameraInit()

  // 设置照相机相关
  camera.Get("position").Call("set", 320, 320, 320);

  cameraLookAtArgs := map [string] interface{} { "x": 0, "y": 0, "z": 0, }

  camera.Call("lookAt", js.ValueOf(cameraLookAtArgs))

  rendererInit()
  controlsInit()

  jQuery.Invoke(global).Call("on", "resize", js.FuncOf(handleWindowResize))

  // 初始化星系
  initAmbientLight()
  sunInit()
  planetsInit()
  planetsRingInit()
  universeInit()

  timer = global.Call("requestAnimationFrame", js.FuncOf(animate))

  return nil
}