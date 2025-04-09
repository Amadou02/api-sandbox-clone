const { sum } = require('../helpers/calc');

describe('Tests de la librairy math', () => {
  it('should throw error', () => {
    try {
      sum('a', 5);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain(
        'les valeurs fournies doivent être des nombres'
      );
    }
  });
});
