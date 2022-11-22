// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


test("is number 1", () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
})
test("is number 2", () => {
    expect(functions.isPhoneNumber("222-222-2222")).toBe(true);
})
test("is number 3", () => {
    expect(functions.isPhoneNumber("hi")).toBe(false);
})
test("is number 4", () => {
    expect(functions.isPhoneNumber("1111111111")).toBe(false);
})

test("is Email 1", ()=>
{
    expect(functions.isEmail("123@gmail.com")).toBe(true);
})

test("is Email 2", ()=>
{
    expect(functions.isEmail("123@hihi.com")).toBe(true);
})

test("is Email3", ()=>
{
    expect(functions.isEmail("123@gmail")).toBe(false);
})

test("is Email 4", ()=>
{
    expect(functions.isEmail("1")).toBe(false);
})

test("is Strong 1", ()=>
{
    expect(functions.isStrongPassword("AbCdEf1029")).toBe(true);
})

test("is Strong 2", ()=>
{
    expect(functions.isStrongPassword("myPassword")).toBe(true);
})

test("is Strong 3", ()=>
{
    expect(functions.isStrongPassword("123@Gmail")).toBe(false);
})

test("is Strong 4", ()=>
{
    expect(functions.isStrongPassword("1")).toBe(false);
})

test("is hexColor 1", ()=>
{
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
})

test("is hexColor 2", ()=>
{
    expect(functions.isHexColor("#000000")).toBe(true);
})

test("is hexColor 3", ()=>
{
    expect(functions.isHexColor("123@Gmail")).toBe(false);
})

test("is hexColor 4", ()=>
{
    expect(functions.isHexColor("1")).toBe(false);
})

test("is hexColor 1", ()=>
{
    expect(functions.isDate("11/21/2022")).toBe(true);
})

test("is hexColor 2", ()=>
{
    expect(functions.isDate("05/14/2003")).toBe(true);
})

test("is hexColor 3", ()=>
{
    expect(functions.isDate("123@Gmail")).toBe(false);
})

test("is hexColor 4", ()=>
{
    expect(functions.isDate("1")).toBe(false);
})
