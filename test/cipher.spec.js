describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal( cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33), "HIJKLMNOPQRSTUVWXYZABCDEFG")
      });

     it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
        assert.equal( cipher.encode("abcdefghijklmnopqrstuvwxyz",33), "hijklmnopqrstuvwxyzabcdefg")
    });

    // it('debería retornar "Ññ#" para "Ññ#" con offset 33',()=>{
    //   assert.equal( cipher.encode('Ññ#',33), 'Ññ#')
    // });
  });


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal( cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });

      it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
        assert.equal( cipher.decode("hijklmnopqrstuvwxyzabcdefg",33), "abcdefghijklmnopqrstuvwxyz")
    });

    // it('debería retornar "Ññ#" para "Ññ#" con offset 33',()=>{
    //   assert.equal( cipher.decode("Ññ#",33), "Ññ#")
    //   });
    });
  });