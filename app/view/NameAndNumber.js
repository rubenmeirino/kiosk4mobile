/*
 * File: app/view/NameAndNumber.js
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

Ext.define('Kiosk4.view.NameAndNumber', {
    extend: 'Ext.form.Panel',
    alias: 'widget.NameAndNumber',

    config: {
        id: 'NameAndNumber',
        itemId: 'NameAndNumber',
        items: [
            {
                xtype: 'spacer',
                height: 30
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        maxLength: 10,
                        placeHolder: 'Name'
                    },
                    {
                        xtype: 'numberfield',
                        placeHolder: 'Number'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Custom name/Number',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp('CustomizePanel').show({type:'slideIn',direction:'right'});
                            Ext.getCmp('NameAndNumber').hide();
                        },
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        html: '<img src="img/Logo.png" />',
                        padding: 0
                    }
                ]
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    Kiosk4.app.oldPage='NameOrNumber';
                    if(!Ext.getCmp('CheckOutPanel')){Ext.Viewport.add({xtype: 'CheckOutPanel'});}
                    Ext.getCmp('CheckOutPanel').show({type:'slideIn',direction:'left'});
                    Ext.getCmp('NameAndNumber').hide();
                    Kiosk4.app.jerseyNumber=Ext.getCmp('NameAndNumber').items.items[1].items.items[1].getValue();
                    Kiosk4.app.jerseyName=Ext.getCmp('NameAndNumber').items.items[1].items.items[0].getValue();
                    Ext.getCmp('CheckOutPanel').items.items[4].setTitle(Ext.getCmp('ItemInfo').getData().Name+"("+Ext.getCmp('ItemInfo').getData().amount+")");
                },
                ui: 'confirm',
                text: 'CheckOut'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom'
            }
        ]
    }

});