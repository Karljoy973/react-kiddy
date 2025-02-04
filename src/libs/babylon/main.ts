import {
  Engine,
  Scene,
  FreeCamera,
  MeshBuilder,
  Camera,
  Vector3,
  HemisphericLight,
  Light,
} from 'babylonjs'
import 'babylonjs-loaders'

export class SpacialEnvironment {
  private _engine: Engine
  private _scene: Scene
  private _camera: Camera
  private _light: Light

  get scene() {
    return this._scene
  }

  get engine() {
    return this._engine
  }

  get camera() {
    return this._camera
  }
  get light() {
    return this._light
  }
  constructor(canvas: HTMLCanvasElement) {
    this._engine = new Engine(canvas, true)
    this._scene = new Scene(this._engine)
    this._camera = new FreeCamera('main-camera', new Vector3(0, 2, -4))
    ;(this._camera as FreeCamera).setTarget(Vector3.Zero())
    //je veux disable le clavier
    this._camera.attachControl()
    this._light = new HemisphericLight('light', new Vector3(0, 1, 0), this._scene)
    MeshBuilder.CreateSphere('planet')
    this._engine.runRenderLoop(() => {
      this._scene.render()
    })
  }
}

// export const ImportSpacialEnvironment = async (scene: Scene, assetPath: any) => {
//   const arrayBuffer = await Tools.LoadFileAsync(assetPath, true)
//   const assetBlob = new Blob([arrayBuffer])
//   const url = URL.createObjectURL(assetBlob)
//   await appendSceneAsync(url, scene, {
//     pluginExtension: '.stl',
//   })
// }

//je veux avoir une classe ici (ou plusieurs)

//il me faut des fonctions qui ajoutent des éléments à la scene
// je ne sais pas si je veux chainer ou autre, j'aurais bien aimé
// avoir à disposition de quoi loader des planetes, des astres, des satellites...
//j'aurais bien aimé passer les fonctions qui sont charger de contruire l'environnement
// en props (peut-etre) dans un premier temps
// dans un deuxieme temps j'aurais bien aimé avoir un coté admin
// qui peut push des expériences immersives et un coté client qui peut
//regarder des expériences immersives (peut-etre ???)
