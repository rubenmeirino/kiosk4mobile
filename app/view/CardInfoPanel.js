/*
 * File: app/view/CardInfoPanel.js
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

Ext.define('Kiosk4.view.CardInfoPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.CardInfoPanel',

    config: {
        id: 'CardInfoPanel',
        itemId: 'CardInfoPanel',
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Card Type',
                        labelWidth: '40%',
                        options: [
                            {
                                text: 'Visa'
                            },
                            {
                                text: 'Master Card'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        label: 'card Number',
                        labelWidth: '40%',
                        placeHolder: 'Required'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Expiration',
                        labelWidth: '40%',
                        placeHolder: 'Required'
                    },
                    {
                        xtype: 'textfield',
                        label: 'CSV Code',
                        labelWidth: '40%',
                        placeHolder: 'Required'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'CheckOut',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp('CheckOutPanel').show({type:'slideIn',direction:'right'});
                            Ext.getCmp('CardInfoPanel').hide();
                        },
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    if(!Ext.getCmp('CardConfirmationPanel')){Ext.Viewport.add({xtype: 'CardConfirmationPanel'});}
                    Ext.getCmp('CardConfirmationPanel').show({type:'slideIn',direction:'left'});
                    Ext.getCmp('CardInfoPanel').hide();
                    var Data={
                        jerseySize:Ext.getCmp('ItemInfo').getData().Name,
                        productPrice:Kiosk4.app.size,
                        jerseyName:Kiosk4.app.jerseyName,
                        jerseyNumber:Kiosk4.app.jerseyNumber,
                        jerseySize:Kiosk4.app.JerseySize,
                        jerseyType:Kiosk4.app.SelectedJersey,
                        CurName:Ext.getCmp('CheckOutPanel').items.items[1].items.items[0].getValue(),
                        CurAddress:Ext.getCmp('CheckOutPanel').items.items[1].items.items[1].getValue(),
                        CurCity:Ext.getCmp('CheckOutPanel').items.items[1].items.items[2].getValue(),
                        CurState:Ext.getCmp('CheckOutPanel').items.items[1].items.items[3].getValue(),
                        CurZip:Ext.getCmp('CheckOutPanel').items.items[1].items.items[4].getValue(),
                        Email:Ext.getCmp('CheckOutPanel').items.items[1].items.items[5].getValue(),
                        Phone:Ext.getCmp('CheckOutPanel').items.items[1].items.items[6].getValue()
                    };
                    Ext.getCmp('CardConfirmationPanel').setValues(Data);
                },
                ui: 'confirm',
                text: 'Confirm Order'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom'
            }
        ]
    }

});