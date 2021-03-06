import React, { Component } from 'react'
import { roles } from './roles'
import './typewriter.css'

const PAUSE_TIME = 1500
const TIMER_INTERVAL = 200
const BACKUP_INTERVAL = 90

export default class Typewriter extends Component {
  chooseRandom(roles) {
    return roles[Math.floor(Math.random() * roles.length)]
  }

  state = {
    currentRole: this.chooseRandom(roles),
    currentValue: ""
  }

  start(){
    this.setState({
      currentRole: this.chooseRandom(roles),
      currentValue: ""
    })
    this.iterateRole(this.state.currentRole, 0)
  }

  backspaceRole(i) {
    if (i >= 0) {
      this.timer = setTimeout(() => {
        this.setState({
          currentValue: this.state.currentValue.substring(0, i)
        })
        this.backspaceRole(i - 1)
      }, BACKUP_INTERVAL)
    } else {
      this.start()
    }
  }

  iterateRole(role, i) {
    if (i <= role.length) {
      this.timer = setTimeout(() => {
        this.setState({
          currentValue: role[i] ? this.state.currentValue + role[i] : this.state.currentValue
        })
        this.iterateRole(role, i + 1)
      }, TIMER_INTERVAL)
    } else {
      let _this = this;
      this.timer = setTimeout(function () {
        _this.backspaceRole(i - 1)
      }, PAUSE_TIME)
    }
  }

  componentDidMount() {
    this.start()
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    return (
      <div className='typewriter-container'>
        <h1>{this.state.currentValue}</h1>
        <div className='typewriter-border'></div>
      </div>
    )
  }
}