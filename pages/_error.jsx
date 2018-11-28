import React from'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <Layout title="Oh no :(">
        { statusCode === 404 ?
          <div className="noExist">
            <button><Link href="/"><a>&lt; Volver</a></Link></button>
          </div>
          :
          <div className="problem">
            <h1>Hubo un problema :(</h1>
            <p>Intenta nuevamente en unos segundos</p>
          </div>
         }
         <style jsx>{`
          .noExist {
            height: 90vh;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url(static/images/error.png);
            background-size: cover;
          }
          button{
            color: #CEE9EC;
            background-color: #66A1B1;
            height: 50px;
            width: auto;
            position: absolute;
            top: 44%;
            left: 49%;
            border-radius: 10%;
            border-bottom-color: #315571;
            border-top: none;
            border-left: none;
            border-right: none;
          }
          button:hover{
            opacity: 0.8;
          }
          a{
            color:#CEE9EC;
            text-decoration-line: none;
            font-size: 2em;
          }
         `}</style>
      </Layout>
    )
  }
}
