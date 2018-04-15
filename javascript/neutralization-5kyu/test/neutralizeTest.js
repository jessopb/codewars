// arguments are guaranteed to be 2 strings representing valid molecular formulae

const neutralize = require('../neutralize')
const {expect} = require('chai');

describe('same type compounds should not react', function () {

  it('2 acids should not neutralize each other', function () {
    expect(neutralize('HCl', 'H3PO4')).to.equal(null);
    expect(neutralize('HCl', 'HCl')).to.equal(null);
  });

  it('2 bases should not neutralize each other', function () {
    expect(neutralize('NaOH', 'NaOH')).to.equal(null);
    expect(neutralize('Mg(OH)2', 'KOH')).to.equal(null);
  });

});

describe('acids and bases neutralize to produce salt (and water)', function () {

  it('acids with bases of equal ionic valence', function () {
    expect(neutralize('NaOH', 'HCl')).to.equal('NaOH + HCl \u2192 NaCl + H2O');
    expect(neutralize('HCl', 'NaOH')).to.equal('HCl + NaOH \u2192 NaCl + H2O');
    expect(neutralize('KOH', 'HNO3')).to.equal('KOH + HNO3 \u2192 KNO3 + H2O');
    expect(neutralize('Mg(OH)2', 'H2SO5')).to.equal('Mg(OH)2 + H2SO5 \u2192 MgSO5 + 2H2O');
    expect(neutralize('H2CO2', 'Ga(OH)2')).to.equal('H2CO2 + Ga(OH)2 \u2192 GaCO2 + 2H2O');
    expect(neutralize('Al(OH)3', 'H3P')).to.equal('Al(OH)3 + H3P \u2192 AlP + 3H2O');
    expect(neutralize('H2SO4', 'Ca(OH)2')).to.equal('H2SO4 + Ca(OH)2 \u2192 CaSO4 + 2H2O');
    expect(neutralize('H4P2O6', 'Pb(OH)4')).to.equal('H4P2O6 + Pb(OH)4 \u2192 PbP2O6 + 4H2O');
  });

  it('acids and bases of unequal valences which cannot be simplified (no common multiples, or GCD=1)', function () {
    expect(neutralize('Mg(OH)2', 'HCl')).to.equal('Mg(OH)2 + 2HCl \u2192 MgCl2 + 2H2O');
    expect(neutralize('H3BO3', 'Th(OH)4')).to.equal('4H3BO3 + 3Th(OH)4 \u2192 Th3(BO3)4 + 12H2O');
    expect(neutralize('La(OH)3', 'HNO2')).to.equal('La(OH)3 + 3HNO2 \u2192 La(NO2)3 + 3H2O');
    expect(neutralize('H2S2O8', 'Ta(OH)5')).to.equal('5H2S2O8 + 2Ta(OH)5 → Ta2(S2O8)5 + 10H2O'); //initially failed
    expect(neutralize('HN3','Cr(OH)6')).to.equal('6HN3 + Cr(OH)6 → Cr(N3)6 + 6H2O');
  });

  it('acid and base with valences which can be simplified (at least one common multiple, or GCD>1)', function () {
    expect(neutralize('H6TeO6', 'Au(OH)3')).to.equal('H6TeO6 + 2Au(OH)3 \u2192 Au2TeO6 + 6H2O');
    expect(neutralize('In(OH)2', 'H2SiF6')).to.equal('In(OH)2 + H2SiF6 \u2192 InSiF6 + 2H2O');
    expect(neutralize('H2SO3', 'Ba(OH)2')).to.equal('H2SO3 + Ba(OH)2 \u2192 BaSO3 + 2H2O');
    expect(neutralize('H4Sb2O7','Cr(OH)6')).to.equal('3H4Sb2O7 + 2Cr(OH)6 → Cr2(Sb2O7)3 + 12H2O');
  });

});
