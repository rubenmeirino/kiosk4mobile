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
                        label: 'Name',
                        labelWidth: '40%',
                        maxLength: 12,
                        placeHolder: 'Required'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Number',
                        labelWidth: '40%',
                        maxLength: 2,
                        placeHolder: 'Required'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Custom Name/Number',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp('CustomizePanel').show({type:'slideIn',direction:'right'});
                            Ext.getCmp('NameAndNumber').hide();
                        },
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'button',
                handler: function(button, event) {
                    Kiosk4.app.oldPage='NameOrNumber';
                    if(!Ext.getCmp('CustomizeFormPanel')){Ext.Viewport.add({xtype: 'CustomizeFormPanel'});}
                    Ext.getCmp('CustomizeFormPanel').show({type:'slideIn',direction:'left'});
                    Ext.getCmp('NameAndNumber').hide();
                    Ext.getCmp('CustomizeFormPanel').items.items[1].setTitle(Kiosk4.app.SelectedJersey);
                    Kiosk4.app.jerseyNumber=Ext.getCmp('NameAndNumber').items.items[1].items.items[1].getValue()+"";
                    Kiosk4.app.jerseyName=Ext.getCmp('NameAndNumber').items.items[1].items.items[0].getValue();
                    /*
                    Ext.getCmp('CustomizeFormPanel').setValues({
                    name:Kiosk4.app.jerseyName,
                    number:Kiosk4.app.jerseyNumber
                    });*/
                },
                ui: 'confirm',
                text: 'Preview'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom'
            }
        ]
    }

});