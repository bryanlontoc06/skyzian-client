import React from 'react'
import ActivatePage from '../../../components/Activate/index'


const Activate = (props) => {
  return <ActivatePage val={props}/>
}

export default Activate;


export const getServerSideProps = async (ctx) => {


  return {
    props: {
      queryToken: ctx.query.token
    }
  }
}
