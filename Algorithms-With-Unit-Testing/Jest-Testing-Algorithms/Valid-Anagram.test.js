test("test that a string t is an anagram of a string s.", () => {
  const s = "anagram";
  const t = "nagaram";
  expect(vaildAnagram(s, t)).toBeTruthy();
});
