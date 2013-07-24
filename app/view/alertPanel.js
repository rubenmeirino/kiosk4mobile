/*
 * File: app/view/alertPanel.js
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

Ext.define('Kiosk4.view.alertPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.alertPanel',

    config: {
        centered: true,
        height: 150,
        id: 'alertPanel',
        itemId: 'alertPanel',
        width: 300,
        modal: true,
        scrollable: false,
        items: [
            {
                xtype: 'container',
                height: '100%',
                width: '100%',
                layout: {
                    align: 'center',
                    type: 'vbox'
                },
                items: [
                    {
                        xtype: 'component',
                        height: 65,
                        html: ' <div align="center" style="color: #fff;font-size: 12pt;">Thank You!<br/>  Your Order has been processed<br/>  Go All Stars!<br/></div>',
                        margin: '0 0 10 0'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, event) {
                            Ext.getCmp('HomePanel').show({type:'slideIn',direction:'right'});
                            Ext.getCmp('CardConfirmationPanel').hide();
                            Ext.getCmp('alertPanel').hide();
                        },
                        ui: 'confirm',
                        width: 100,
                        text: 'OK'
                    }
                ]
            }
        ]
    }

});