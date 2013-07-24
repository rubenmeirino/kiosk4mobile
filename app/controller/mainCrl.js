/*
 * File: app/controller/mainCrl.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Kiosk4.controller.mainCrl', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button[cls=HomeBut]": {
                release: 'onButtonRelease'
            },
            "button[cls=sizeBut]": {
                release: 'onButtonRelease1'
            },
            "button[cls=HomeCls]": {
                release: 'onButtonRelease2'
            }
        }
    },

    onButtonRelease: function(button, e, eOpts) {
        if(!Ext.getCmp('conformationPanel')){Ext.Viewport.add({xtype: 'conformationPanel'});}
        Ext.getCmp('conformationPanel').show({type:'popIn',direction:'left'});
        if(button.config.no==1){
            data={Name:"Replica Home",amount:'$50',img:"img/Dallas_3.jpg"};
        }else if(button.config.no==2){
            data={Name:"Replica Away",amount:'$60',img:"img/Dallas_4.jpg"};
        }else if(button.config.no==3){
            data={Name:"Premier Home",amount:'$70',img:"img/Dallas_2.jpg"};
        }else if(button.config.no==4){
            data={Name:"Premier Away",amount:'$80',img:"img/Dallas_1.jpg"};
        }
        Ext.getCmp('ItemInfo').setData(data);
    },

    onButtonRelease1: function(button, e, eOpts) {
        if(!Ext.getCmp('CustomizePanel')){Ext.Viewport.add({xtype: 'CustomizePanel'});}
        Ext.getCmp('CustomizePanel').show({type:'slideIn',direction:'left'});
        Ext.getCmp('SizePanel').hide();
        Ext.getCmp('CustomizePanel').items.items[5].setTitle(Ext.getCmp('ItemInfo').getData().Name+"("+Ext.getCmp('ItemInfo').getData().amount+")");
    },

    onButtonRelease2: function(button, e, eOpts) {
        if(!Ext.getCmp('conformationPanel')){Ext.Viewport.add({xtype: 'conformationPanel'});}
        Ext.getCmp('conformationPanel').show({type:'popIn',direction:'left'});
        if(button.config.no==1){
            data={Name:"Replica Home",amount:'$50',img:"img/Dallas_3.jpg"};
        }else if(button.config.no==2){
            data={Name:"Replica Away",amount:'$60',img:"img/Dallas_4.jpg"};
        }else if(button.config.no==3){
            data={Name:"Premier Home",amount:'$70',img:"img/Dallas_2.jpg"};
        }else if(button.config.no==4){
            data={Name:"Premier Away",amount:'$80',img:"img/Dallas_1.jpg"};
        }
        Ext.getCmp('ItemInfo').setData(data);
    }

});