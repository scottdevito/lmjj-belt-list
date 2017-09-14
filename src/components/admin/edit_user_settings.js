import React, { Component } from 'react';
import UserInfo from './user_info';
import { Select, Button } from 'antd';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class EditUserSettings extends Component {
  render() {
    // If there are multiple users returned from the search query, display ChooseUser component
    let multipleUsers =
      this.props.searchedUser && Object.keys(this.props.searchedUser).length;

    return (
      <div>
        {multipleUsers > 1 ? (
          <div>Multiple Users</div>
        ) : (
          <div>
            <UserInfo />
            <Select
              defaultValue="currentBelt"
              style={{ width: 200 }}
              size="large"
              onChange={handleChange}
            >
              <Option value="white">White</Option>
              <Option value="yellow">Yellow</Option>
              <Option value="yellowb">Yellow - Black stripe</Option>
              <Option value="orange">Orange</Option>
              <Option value="orangeb">Orange - Black Stripe</Option>
              <Option value="green">Green</Option>
              <Option value="greenb">Green - Black Stripe</Option>
              <Option value="red">Red</Option>
              <Option value="redb">Red - Black Stripe</Option>
              <Option value="blue">Blue</Option>
              <Option value="blueb">Blue - Black Stripe</Option>
              <Option value="purple">Purple</Option>
              <Option value="purpleb">Purple - Black Stripe</Option>
              <Option value="brown">Brown</Option>
              <Option value="brownb">Brown - Black Stripe</Option>
              <Option value="black">Black</Option>
            </Select>
            <Button className="admin-submit" type="primary">
              Submit
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default EditUserSettings;