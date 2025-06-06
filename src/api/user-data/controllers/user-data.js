'use strict';

/**
 * A set of functions called "actions" for `user-data`
 */

module.exports = {
  findAll: async (ctx, next) => {

    console.log(ctx.state.user,"hereeeeeeeeeeeeeeeeeee")
    
    let affectedRecordData = await strapi.entityService.findOne(
      "plugin::users-permissions.user",
      1,
      {
        populate: "preOrders",
      }
    );
    
    // console.log(affectedRecordData)
    try {
      ctx.body = affectedRecordData
    } catch (err) {
      ctx.body = err;
    }
  },
  register: async (ctx, next) => {

    
    try {
      let body = ctx.request.body
      if(!body) throw Error('no body found')
      if(!body.email) throw Error('Email is Required')
      if(!body.username) throw Error('username is Required')
      if(!body.password) throw Error('password is Required')
      if(!body.firstname) throw Error('firstname is Required')
      if(!body.lastname) throw Error('lastname is Required')

      let data = {
        email:body.email,
        username:body.username,
        password:body.password,
        firstname:body.firstname,
        lastname:body.lastname,
        confirmed:true,
        provider:"local"
      }

      const findEmail = await strapi.db.query('plugin::users-permissions.user').findOne({
        where: { email: body.email }
      })
      console.log(findEmail,"findEmailfindEmail")
      if(findEmail) throw Error('Email exists Already')

      const findusername = await strapi.db.query('plugin::users-permissions.user').findOne({
        where: { username: body.username }
      })
      if(findusername) throw Error('Username exists Already')
      const newUser = await strapi.plugins['users-permissions'].services.user.add(data);
      console.log(newUser,"newUsernewUsernewUsernewUser")
      ctx.body = newUser
      
    } catch (err) {
      console.log(err.message,"errerrerrerr")
      ctx.response.status = 422
      ctx.body = {
        message:err.message
      };
    }
  }
};

// MAKE THE CUSTOM API IN AUTHTICATED SECTIONS
