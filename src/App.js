import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


var dict = {}
dict['1'] = 0
dict['2'] = 0
dict['3'] = 0
dict['4'] = 0
dict['5'] = 0
dict['6'] = 0
dict['7'] = 0
dict['8'] = 0
dict['9'] = 0
dict['10'] = 0
dict['11'] = 0
dict['12'] = 0

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // var friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array

    let stringID = id.toString()

    console.log(stringID)

    if (dict[stringID] >= 1) {
      this.setState({ score: 0 });

      dict['1'] = 0
      dict['2'] = 0
      dict['3'] = 0
      dict['4'] = 0
      dict['5'] = 0
      dict['6'] = 0
      dict['7'] = 0
      dict['8'] = 0
      dict['9'] = 0
      dict['10'] = 0
      dict['11'] = 0
      dict['12'] = 0

    } else {
      dict[stringID] += 1
      // increment score

      this.setState({ score: this.state.score + 1 });

      console.log(this.state.score)

    }


    var friends = this.shuffle(this.state.friends)

    // friends = this.shuffle(this.state.friends)

    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title><div>Score: {this.state.score}</div>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
