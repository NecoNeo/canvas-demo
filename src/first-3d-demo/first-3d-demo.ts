import * as THREE from 'three';
import { UserInterface } from "../user-interface";


export class First3DDemo {

  canvas: HTMLCanvasElement;

  init(ui: UserInterface) {
    this.canvas = ui.getCanvas();
    this.render();
  }

  render() {
    /**
     * 创建场景对象Scene
     */
    const scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    // const geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
    // const geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry

    const verticesOfCube = [
      -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
        -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
    ];
    
    const indicesOfFaces = [
        2,1,0,    0,3,2,
        0,4,7,    7,3,0,
        0,1,5,    5,4,0,
        1,2,6,    6,5,1,
        2,3,7,    7,6,2,
        4,5,6,    6,7,4
    ];

    const geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 50, 1); //创建一个立方体几何对象Geometry
    // const material = new THREE.MeshLambertMaterial({
    //   color: 0x0000ff
    // }); //材质对象Material

    var material = new THREE.MeshLambertMaterial({
      color: 0xc0c0c0, // 三角面颜色
      wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); // 网格模型添加到场景中
    /**
     * 光源设置
     */
    //点光源
    const point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); // 点光源位置
    scene.add(point); // 点光源添加到场景中
    //环境光
    const ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    /**
     * 相机设置
     */
    const width = 1200;// window.innerWidth; //窗口宽度
    const height = 1200; // window.innerHeight; //窗口高度
    const k = width / height; //窗口宽高比
    const s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    // const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    const camera = new THREE.PerspectiveCamera(25, 1, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    renderer.setSize(width, height, false); //设置渲染区域尺寸
    // renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    renderer.setClearColor(0xffffff, 1); //设置背景颜色
    document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    renderer.render(scene, camera);
  }

}
