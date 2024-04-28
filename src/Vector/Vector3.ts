export default class Vector3 {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
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

  zero() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
}
