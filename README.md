# Pokéapi Wrapper

Client interface for accessing [The RESTful Pokémon API](http://pokeapi.co/).

[![NPM version](https://img.shields.io/npm/v/pokemon-wrapi.svg?style=flat)](https://www.npmjs.org/package/pokemon-wrapi)


## Installation

Install via [npm](https://www.npmjs.org/package/pokemon-wrapi)

```bash
npm install pokemon-wrapi --save
```

## Usage

Create a client object to access Pokéapi [resources](http://pokeapi.co/docsv2/#resource-lists).

```JS
var pokeWrapi = require('pokemon-wrapi');

var client = new pokeWrapi();

// Now you are ready to make API calls to Pokéapi.
```

Provide parameters and a callback. 

Resource API calls follow this syntax:

`client.resource(name, callback);`

* `name` - id or name.

Resource list API calls follow this syntax:

`client.resource.list(queryString, callback);`

* `queryString` - (*if required*) `limit` & `offset` are used for pagination.

### Examples

#### Lists all Pokémons.
```JS
client.pokemon.list(function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```
#### Get details of a specific Pokémon.
```JS
client.pokemon('palkia', function(err, data) {
  if (!err) {
    console.log(data);
  } 
});
```

## API Functions

### Berries
* [berry.list](http://pokeapi.co/docsv2/#berries)
* [berry](http://pokeapi.co/docsv2/#berries)
* [berry.firmness.list](http://pokeapi.co/docsv2/#berry-firmnesses)
* [berry.firmness](http://pokeapi.co/docsv2/#berry-firmnesses)
* [berry.flavor.list](http://pokeapi.co/docsv2/#berry-flavors)
* [berry.flavor](http://pokeapi.co/docsv2/#berry-flavors)

### Contests
* [contest.type.list](http://pokeapi.co/docsv2/#contest-types)
* [contest.type](http://pokeapi.co/docsv2/#contest-types)
* [contest.effect.list](http://pokeapi.co/docsv2/#contest-effects)
* [contest.effect](http://pokeapi.co/docsv2/#contest-effects)
* [superContest.effect.list](http://pokeapi.co/docsv2/#super-contest-effects)
* [superContest.effect](http://pokeapi.co/docsv2/#super-contest-effects)

### Encounters
* [encounter.method.list](http://pokeapi.co/docsv2/#encounter-methods)
* [encounter.method](http://pokeapi.co/docsv2/#encounter-methods)
* [encounter.condition.list](http://pokeapi.co/docsv2/#encounter-conditions)
* [encounter.condition](http://pokeapi.co/docsv2/#encounter-conditions)
* [encounter.condition.value.list](http://pokeapi.co/docsv2/#encounter-condition-values)
* [encounter.condition.value](http://pokeapi.co/docsv2/#encounter-condition-values)

### Evolution
* [evolution.chain.list](http://pokeapi.co/docsv2/#evolution-chains)
* [evolution.chain](http://pokeapi.co/docsv2/#evolution-chains)
* [evolution.trigger.list](http://pokeapi.co/docsv2/#evolution-triggers)
* [evolution.trigger](http://pokeapi.co/docsv2/#evolution-triggers)

### Games
* [generation.list](http://pokeapi.co/docsv2/#generations)
* [generation](http://pokeapi.co/docsv2/#generations)
* [pokedex.list](http://pokeapi.co/docsv2/#pokedexes)
* [pokedex](http://pokeapi.co/docsv2/#pokedexes)
* [version.list](http://pokeapi.co/docsv2/#versions)
* [version](http://pokeapi.co/docsv2/#versions)
* [version.group.list](http://pokeapi.co/docsv2/#version-groups)
* [version.group](http://pokeapi.co/docsv2/#version-groups)

### Items
* [item.list](http://pokeapi.co/docsv2/#items)
* [item](http://pokeapi.co/docsv2/#items)
* [item.attribute.list](http://pokeapi.co/docsv2/#item-attributes)
* [item.attribute](http://pokeapi.co/docsv2/#item-attributes)
* [item.category.list](http://pokeapi.co/docsv2/#item-categories)
* [item.category](http://pokeapi.co/docsv2/#item-categories)
* [item.fling.effect.list](http://pokeapi.co/docsv2/#item-fling-effects)
* [item.fling.effect](http://pokeapi.co/docsv2/#item-fling-effects)
* [item.pocket.list](http://pokeapi.co/docsv2/#item-pockets)
* [item.pocket](http://pokeapi.co/docsv2/#item-pockets)

### Machines
* [machine.list](http://pokeapi.co/docsv2/#machines)
* [machine](http://pokeapi.co/docsv2/#machines)

### Moves
* [move.list](http://pokeapi.co/docsv2/#moves)
* [move](http://pokeapi.co/docsv2/#moves)
* [move.ailment.list](http://pokeapi.co/docsv2/#move-ailments)
* [move.ailment](http://pokeapi.co/docsv2/#move-ailments)
* [move.battle.style.list](http://pokeapi.co/docsv2/#move-battle-styles)
* [move.battle.style](http://pokeapi.co/docsv2/#move-battle-styles)
* [move.category.list](http://pokeapi.co/docsv2/#move-categories)
* [move.category](http://pokeapi.co/docsv2/#move-categories)
* [move.damage.class.list](http://pokeapi.co/docsv2/#move-damage-classes)
* [move.damage.class](http://pokeapi.co/docsv2/#move-damage-classes)
* [move.learn.method.list](http://pokeapi.co/docsv2/#move-learn-methods)
* [move.learn.method](http://pokeapi.co/docsv2/#move-learn-methods)
* [move.target.list](http://pokeapi.co/docsv2/#move-targets)
* [move.target](http://pokeapi.co/docsv2/#move-targets)

### Locations
* [location.list](http://pokeapi.co/docsv2/#locations)
* [location](http://pokeapi.co/docsv2/#locations)
* [location.area.list](http://pokeapi.co/docsv2/#location-areas)
* [location.area](http://pokeapi.co/docsv2/#location-areas)
* [pal.park.area.list](http://pokeapi.co/docsv2/#pal-park-areas)
* [pal.park.area](http://pokeapi.co/docsv2/#pal-park-areas)
* [region.list](http://pokeapi.co/docsv2/#regions)
* [region](http://pokeapi.co/docsv2/#regions)

### Pokemon
* [ability.list](http://pokeapi.co/docsv2/#abilities)
* [ability](http://pokeapi.co/docsv2/#abilities)
* [characteristic.list](http://pokeapi.co/docsv2/#characteristics)
* [characteristic](http://pokeapi.co/docsv2/#characteristics)
* [egg.group.list](http://pokeapi.co/docsv2/#egg-groups)
* [egg.group](http://pokeapi.co/docsv2/#egg-groups)
* [gender.list](http://pokeapi.co/docsv2/#genders)
* [gender](http://pokeapi.co/docsv2/#genders)
* [growth.rate.list](http://pokeapi.co/docsv2/#growth-rates)
* [growth.rate](http://pokeapi.co/docsv2/#growth-rates)
* [nature.list](http://pokeapi.co/docsv2/#natures)
* [nature](http://pokeapi.co/docsv2/#natures)
* [pokeathlon.stat.list](http://pokeapi.co/docsv2/#pokeathlon-stats)
* [pokeathlon.stat](http://pokeapi.co/docsv2/#pokeathlon-stats)
* [pokemon.list](http://pokeapi.co/docsv2/#pokemon)
* [pokemon](http://pokeapi.co/docsv2/#pokemon)
* [pokemon.color.list](http://pokeapi.co/docsv2/#pokemon-colors)
* [pokemon.color](http://pokeapi.co/docsv2/#pokemon-colors)
* [pokemon.form.list](http://pokeapi.co/docsv2/#pokemon-forms)
* [pokemon.form](http://pokeapi.co/docsv2/#pokemon-forms)
* [pokemon.habitat.list](http://pokeapi.co/docsv2/#pokemon-habitats)
* [pokemon.habitat](http://pokeapi.co/docsv2/#pokemon-habitats)
* [pokemon.shape.list](http://pokeapi.co/docsv2/#pokemon-shapes)
* [pokemon.shape](http://pokeapi.co/docsv2/#pokemon-shapes)
* [pokemon.species.list](http://pokeapi.co/docsv2/#pokemon-species)
* [pokemon.species](http://pokeapi.co/docsv2/#pokemon-species)
* [stat.list](http://pokeapi.co/docsv2/#stats)
* [stat](http://pokeapi.co/docsv2/#stats)
* [type.list](http://pokeapi.co/docsv2/#types)
* [type](http://pokeapi.co/docsv2/#types)

### Utility
* [language.list](http://pokeapi.co/docsv2/#languages)
* [language](http://pokeapi.co/docsv2/#languages)

## License

  [MIT](LICENSE)
