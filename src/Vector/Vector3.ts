import { clamp } from "../MathUtil/index";
export default class Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(v: Vector3);
  constructor(x?: number, y?: number, z?: number);
  constructor(x?: number | Vector3, y?: number, z?: number) {
    if(x instanceof Vector3) {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z;
    } else {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
  }

  /**
   * @description: 获取向量的长度，即向量的模长
   * @return {number} 向量的模长
   */
  length(): number {
    // return vector length
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * @description: 向量归一化
   */
  normalize() {
    let vecMag = Math.sqrt(this.length());
    if (vecMag != 0) {
      let scaler = 1 / vecMag;
      this.x *= scaler;
      this.y *= scaler;
      this.z *= scaler;
    }
  }

  /**
   * @description: 3d向量夹值计算
   * @param {Vector3} min
   * @param {Vector3} max
   */
  clamp(min: Vector3, max: Vector3) {
    this.x = clamp(this.x, min.x, max.x);
    this.y = clamp(this.y, min.y, max.y);
    this.z = clamp(this.z, min.z, max.z);
  }

  /**
   * @description: 向量插值计算
   * @param {Vector3} to 
   * @param {number} ratio
   * @return {*}
   */
  lerp(to: Vector3, ratio: number): void {
    this.x = this.x + ratio * (to.x - this.x);
    this.y = this.y + ratio * (to.y - this.y);
    this.z = this.z + ratio * (to.z - this.z);
  }

  zero() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
}
