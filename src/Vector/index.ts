import Vector2 from "./Vector2";
import Vector3 from "./Vector3";

export default class Vector {
  /**
   * @description: 两个向量相加
   */
  static add(out: Vector2, v1: Vector2, v2: Vector2): void;
  static add(out: Vector3, v1: Vector3, v2: Vector3): void {
    out.x = v1.x + v2.x;
    out.y = v1.y + v2.y;
    if (out instanceof Vector3 && v1 instanceof Vector3 && v2 instanceof Vector3) {
      out.z = v1.z + v2.z;
    }
  }

  /**
   * @description: 两个向量相减
   */
  static substract(out: Vector2, v1: Vector2, v2: Vector2): void;
  static substract(out: Vector3, v1: Vector3, v2: Vector3): void {
    out.x = v1.x - v2.x;
    out.y = v1.y - v2.y;
    if (out instanceof Vector3 && v1 instanceof Vector3 && v2 instanceof Vector3) {
      out.z = v1.z - v2.z;
    }
  }

  /**
   * @description: 向量乘以标量
   */
  static multiplyScalar(out: Vector2, v: Vector2, scalar: number): void;
  static multiplyScalar(out: Vector3, v: Vector3, scalar: number): void {
    out.x = v.x * scalar;
    out.y = v.y * scalar;
    if (out instanceof Vector3 && v instanceof Vector3) {
      out.z = v.z * scalar;
    }
  }

  /**
   * @description: 判断两个向量是否相等
   * @return {boolean} 
   */
  static equals(v1: Vector2, v2: Vector2): boolean;
  static equals(v1: Vector3, v2: Vector3): boolean {
    if (v1 instanceof Vector3 && v2 instanceof Vector3) {
      return v1.x == v2.x && v1.y == v2.y && v1.z == v2.z;
    } else {
      return v1.x == v2.x && v1.y == v2.y;
    }
  }

  /**
   * @description: 向量点乘
   * @return {number} 点乘结果
   */
  static dot(v1: Vector2, v2: Vector2): number;
  static dot(v1: Vector3, v2: Vector3): number {
    if (v1 instanceof Vector3 && v2 instanceof Vector3) {
      return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    } else {
      return v1.x * v2.x + v1.y * v2.y;
    }
  }

  /**
   * @description: 向量叉乘
   * @param {Vector3} out 叉乘结果
   * @param {Vector3} v1 向量1
   * @param {Vector3} v2 向量2
   */
  static cross(out: Vector3, v1: Vector3, v2: Vector3): void {
    out.x = v1.y * v2.z - v2.y * v1.z;
    out.y = v1.x * v2.z - v2.x * v1.z;
    out.z = v1.x * v2.y - v2.x * v1.y;
  }
}
