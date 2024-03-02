import { sum } from "../sum"

test("Sum function", ()=>{
    const res = sum(1,3);

    expect(res).toBe(4);
})