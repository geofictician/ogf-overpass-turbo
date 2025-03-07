# The OGF version of Overpass-Turbo

This is the opengeofiction fork of the [overpass-turbo](https://github.com/tyrasd/overpass-turbo) application.
It is used by the [opengeofiction.net website](https://opengeofiction.net/about), which uses the OSM software "stack" 
to implement a website where people can draw imaginary digital maps on a shared, imaginary world.

The customization of the the various components of the OSM software stack is currently quite ad hoc and quite
specific to the opengeofiction application, but our long term intention is to develop this fork to better enable
anyone interested in using the OSM stack for geofiction to set up their own server.

Contact information for the team of volunteers who host and run the opengeofiction website is found [here](https://opengeofiction.net/contact).

Installation of the turbo application can be done following the steps referenced below. A geofiction-specific INSTALL will eventually 
be written, including instruction for how to set up all the customized elements of the OSM stack.

# Everything below this line is the README.md inherited from overpass-turbo by tyrasd:
# overpass turbo

- https://overpass-turbo.eu/ – stable version
- https://tyrasd.github.io/overpass-turbo/ – latest version

This is a GUI for testing and developing queries for the [Overpass-API](http://www.overpass-api.de/). It can also used for simple analysis of OSM data.

[![](http://wiki.openstreetmap.org/w/images/thumb/9/99/Overpass_turbo_showcase_1.png/600px-Overpass_turbo_showcase_1.png)](http://overpass-turbo.eu)

## Getting Started

Just point your browser to [overpass-turbo.eu](http://overpass-turbo.eu) and start running your Overpass queries.

More information about _overpass turbo_ is found in the [OSM wiki](http://wiki.openstreetmap.org/wiki/Overpass_turbo).

## Translating

Translations are managed using the [Transifex](https://www.transifex.com/projects/p/overpass-turbo) platform. After signing up, you can go to [overpass-turbo's project page](https://www.transifex.com/projects/p/overpass-turbo), select a language and click _Translate now_ to start translating.

If your language isn't currently in the list, just drop me a [mail](mailto:tyr.asd@gmail.com) or open an [issue ticket](https://github.com/tyrasd/overpass-turbo/issues/new).

To download the latest translations from Transifex, run `tx pull --all` using the [Transifex client `tx`](https://docs.transifex.com/client/introduction).

## Development

### URL parameters

_overpass turbo_ can be linked from other applications by using [URL parameters](http://wiki.openstreetmap.org/wiki/Overpass_turbo/Development#URL_Parameters).
For example, one can provide a query to load, set the initial map location, or instruct turbo to load a [template](http://wiki.openstreetmap.org/wiki/Overpass_turbo/Templates).

### git-branches

Development is done in the _master_ branch, stable releases are marked with git tags, the _gh-pages_ branch contains static builds of the releases.

### install & run

1. `npm install`
2. `npm start` for a Development server listening at http://localhost:8080
3. `npm run build` for a minified build in `./build`
