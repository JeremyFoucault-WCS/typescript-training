describe('let declarations', () => {

  const noop = (...arg) => {}

  it('can be used in place of `var`', () => {

    let musician= 'John Lennon';
    let isDead= true;

    // Declare musician using 'let'
    // Declare isDead using 'let'
    expect(musician).toBe('John Lennon')
    expect(isDead).toBe(true)
  })

  it('can modify the value of a `let` variable', () => {

    let releaseName = 'ES6'
     expect(releaseName).toBe('ES6')
  })

    // Delcare 'releaseName' using 'let', setting the value to 'ES6'
    // Change value of releaseName to be `ES2015`, the new name for ES6
   

  it('is trapped inside of an `if` statement', () => {
    if (true) {
      // Change to `var` to `let`, so that b is scoped inside of the if-statement
      let b = 1
      
  }
  expect(() => noop(b)).toThrow()
  })

  it('cannot redeclare using the same name', () => {
    function doLoop() {
      // Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
      for (let i = 0; i < 10; i++) {
        // empty loop content
      }
      return i
    }

    expect(doLoop).toThrow()
  })

  it('enable to use block statements', () => {
    // BLOCK STATEMENT
    {
      // Change to `let` declaration
      let d = 2
    }

    expect(() => noop('d', d)).toThrow()
  })

  it('enable to use nested block statements', () => {
    // replace dots (...) below with appropriate `let` statements to make expectations pass

    // NESTED BLOCK STATEMENTS
     let message= 'John';
    expect(message).toBe('John')
    {
      let message= 'Lennon';
      expect(message).toBe('Lennon')
      {
        let message = 'died';
        expect(message).toBe('died')
      }
      expect(message).toBe('Lennon')
    }
    expect(message).toBe('John')
    // how many variables do we declare here?
    3
  })

})
