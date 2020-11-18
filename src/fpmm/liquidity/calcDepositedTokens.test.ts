/* eslint-env jest */
import { BigNumber } from "@ethersproject/bignumber";
import { Zero } from "@ethersproject/constants";
import { calcDepositedTokens } from "./calcDepositedTokens";

describe("calcDepositedTokens", () => {
  it("returns min of holdings mapped to factor", () =>
    expect(calcDepositedTokens(BigNumber.from(20), [1, 2, 3].map(BigNumber.from), BigNumber.from(2))).toStrictEqual(
      BigNumber.from(10),
    ));

  describe("when no holdings", () => {
    it("returns 0", () =>
      expect(
        calcDepositedTokens(BigNumber.from(20), [100, 20, 0].map(BigNumber.from), BigNumber.from(10)),
      ).toStrictEqual(Zero));
  });

  describe("when no funding", () => {
    it("returns 0", () =>
      expect(calcDepositedTokens(BigNumber.from(20), [100, 200, 300].map(BigNumber.from), Zero)).toStrictEqual(Zero));
  });
});
