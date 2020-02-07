import React, { Component } from 'react'

interface FilterProps {
  onTextChange: (value: string) => void
}

class Filter extends Component<FilterProps> {
  render() {
    return (
      <div>
        <input type="text" onKeyUp={(event: any) => {
          this.props.onTextChange(event.target.value)
        }}/>
      </div>
    );
  }
}

export default Filter