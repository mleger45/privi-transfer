import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";

export default class QuantityStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      selected: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    console.log("new name", name);
    this.setState({ selected: name });
  }

  componentDidMount() {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const coins = data.map((item) => {
          const { id, image, name } = item;
          return { id, image, name };
        });
        this.setState({ coins, selected: coins[0].name });
      })
      .catch((error) => console.error("Error", error));
  }

  render() {
    
    const coinSelect =
      this.state.coins ? (
        <FormControl >
          <InputLabel htmlFor="coin-simple"></InputLabel>
          <Select
            id="select"
            value={this.state.selected}
            onChange={this.handleChange}
            inputProps={{
              name: 'coin',
              id: 'coin-simple',
            }}
          >
            <MenuItem aria-label="None" value="" />
            {this.state.coins.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                <img src={item.image} width="15" height="15" /> {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <br />
      );
    return (
      <div>
        <form>
          <FormControl>
            <TextField id="standard-basic" label="Cantidad" type="" />
          </FormControl>
          {coinSelect}
        </form>
      </div>
    );
  }
}
