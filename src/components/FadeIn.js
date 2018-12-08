import React from 'react'

const staticStyles = {
    transition: "0.5s ease-in-out"
}

export default class Grid extends React.Component {
    constructor(props) {
        super(props)

        const styles = Array(this.props.fadeCount).fill({ opacity: 0 })

        this.state = {
            styles
        }
    }

    componentDidMount() {
        this.state.styles.forEach((style, i) => {
            setTimeout(() => {
                this.setState(prevState => {
                    const prevStyles = prevState.styles
                    return {
                        styles: [
                            ...prevStyles.slice(0,i),
                            { opacity: 1 },
                            ...prevStyles.slice(i+1, prevStyles.length)
                        ]
                    }
                })
            }, (i+1)*250)
        })
    }

    render() {
      return (
        <div>
        {
            this.props.children.map((child, i) => {
                return <div key={child.key} style={{...this.state.styles[i], ...staticStyles}}>{child}</div>
            })
        }
        </div>
      )
    }
  }