import { describe, it, expect } from "vitest"
import { formatPriceAUS } from "../lib/format"

// "describe" - groups related tests together
// "it" - one individual test case
describe("formatPriceAUS", () => {
    it("format 150 as $150.00", () => {
        expect(formatPriceAUS(150)).toBe("$150.00")
    })

    it("format 0 as $0.00", () => {
        expect(formatPriceAUS(0)).toBe("$0.00")
    })

    it("format 1500 as $1500.00", () => {
        expect(formatPriceAUS(1500)).toBe("$1,500.00")
    })

    it("format 9.99 as $9.99", () => {
        expect(formatPriceAUS(9.99)).toBe("$9.99")
    })

    it("handles negative price", () => {
        expect(formatPriceAUS(-50)).toBe("-$50.00")
    })
})