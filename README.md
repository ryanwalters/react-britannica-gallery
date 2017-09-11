# generic-react-component

Basic scaffolding for creating React components.

## Set up your repo

1. Create and move into your component's directory
	```
	mkdir your-shiny-component && cd your-shiny-component
	```
1. Clone the repo
	```
	git clone git@github.com:ryanwalters/generic-react-component.git
	```
1. Update the remote
	```
	git remote rm origin
	git remote add origin <new git repo url>
	```
1. Rename the component
	- Change `name` in `package.json`
	- Search and replace `GenericComponent` -> `YourShinyComponent`
1. Commit and push the new component. Note: the `-u` flag is only needed this once to set the upstream repo.
	```
	git commit -am "initial commit"
	git push -u origin master
	```

## Set up your environment to work locally on your component

#### Component directory

```
cd ~/your-shiny-component
npm install
npm link
```

This installs our dependencies and allows us to use this dev version of the component in other projects as if it were installed as a dependency. [`npm link` documentation](https://docs.npmjs.com/cli/link)

#### Project directory

```
cd ~/big-project
npm link your-shiny-component
```

This lets us use `your-shiny-component` from within the project as if it were a normal dependency.

```javascript
import React from 'react';
import YourShinyComponent from 'your-shiny-component';

class App extends React.Component {
    
    render() {
        return (
            <div>
            	Just look how shiny: <YourShinyComponent/>
            </div>
        )
    }
}

export default App;
```

## Working on your component

You should probably have two terminal windows open. One terminal for the component, one for the project.

Inside the component terminal, run `npm start`. This starts up webpack and watches your component, recompiling when a change is made.


## Removing the link

```
cd ~/big-project
npm unlink your-shiny-component

cd ~/your-shiny-component
npm unlink
```

#### Credits:
Borrowed much of this from [How to create a React component and publish it on NPM](https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce)
