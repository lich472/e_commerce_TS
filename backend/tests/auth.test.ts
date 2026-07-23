import { describe, it, expect } from "vitest"
import { generateTokens } from "../controllers/auth.controller.js"
import { Types } from "mongoose"

describe("generateTokens", () => {
  it("returns accessToken and refreshToken", () => {
    const userId = new Types.ObjectId()
    const { accessToken, refreshToken } = generateTokens(userId)
    
    expect(accessToken).toBeDefined()
    expect(refreshToken).toBeDefined()
  })

  it("returns strings", () => {
    const userId = new Types.ObjectId()
    const { accessToken, refreshToken } = generateTokens(userId)
    
    expect(typeof accessToken).toBe("string")
    expect(typeof refreshToken).toBe("string")
  })
})