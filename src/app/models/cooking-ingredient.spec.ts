import { CookingIngredient } from './cooking-ingredient';

describe('CookingIngredient', () => {
  it('should create an instance', () => {
    expect(new CookingIngredient("test ingredient")).toBeTruthy();
  });
});
