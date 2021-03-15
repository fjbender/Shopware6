(this.webpackJsonp=this.webpackJsonp||[]).push([["mollie-payments"],{C7fN:function(e){e.exports=JSON.parse('{"mollie-payments":{"general":{"mainMenuItemGeneral":"Mollie Payments Zahlungen","descriptionTextModule":"Mollie Payments Zahlungen","refundThroughMollie":"Rückerstattung über Mollie","shipThroughMollie":"Versand bei Mollie melden"},"modals":{"refund":{"title":"Bestellposition über Mollie rückerstatten","content":"Menge dieser Bestellposition ({refundableQuantity} von {quantity} für Rückerstattung möglich) für die Rückerstattung an den Kunden.","quantityPlaceholder":"Menge für Rückerstattung...","createCreditText":"Create a credit item for this refund.","confirmButton":"Rückerstatten","cancelButton":"Abbrechen"},"shipping":{"title":"Versand der Bestellposition an Mollie melden","content":"Menge dieser Bestellposition ({shippableQuantity} von {quantity} für Versand noch möglich), die an den Kunden versandt wurden.","quantityPlaceholder":"Menge der versendeten Ware...","confirmButton":"Versandmeldung bei Mollie","cancelButton":"Abbrechen"}}},"sw-order":{"detailExtended":{"columnRefunded":"Rückerstattet","columnShipped":"Versandt","labelMollieOrderId":"Mollie Bestell ID","totalRefunds":"Rückerstattete Menge ({quantity} Stück)","totalShipments":"Versandte Menge ({quantity} Stück)"}},"sw-payment":{"testButton":"Prüfung","testApiKeys":{"title":"Mollie Payments","apiKey":"API Schlüssel","isValid":"ist gültig","isInvalid":"ist gültig"}},"sw-customer":{"extendedInfo":{"labelPreferredIdealIssuer":"Bevorzugter iDeal Aussteller"}}}')},CrZb:function(e){e.exports=JSON.parse('{"mollie-payments":{"general":{"mainMenuItemGeneral":"Mollie Payments","descriptionTextModule":"Mollie Payments","refundThroughMollie":"Refund through Mollie","shipThroughMollie":"Ship through Mollie"},"modals":{"refund":{"title":"Refund an order line item through Mollie","content":"Fill out the quantity of this item ({refundableQuantity} out of {quantity} left to refund) to be refunded to the customer.","quantityPlaceholder":"The quantity to refund...","createCreditText":"Create a credit item for this refund.","confirmButton":"Refund","cancelButton":"Do not refund"},"shipping":{"title":"Ship an order line item through Mollie","content":"Fill out the quantity of this item ({shippableQuantity} out of {quantity} left to ship) to be shipped to the customer.","quantityPlaceholder":"The quantity to ship...","confirmButton":"Ship","cancelButton":"Do not ship"}}},"sw-order":{"detailExtended":{"columnRefunded":"Refunded","columnShipped":"Shipped","labelMollieOrderId":"Mollie Order ID","totalRefunds":"Refunded amount ({quantity} items)","totalShipments":"Shipped amount ({quantity} items)"}},"sw-payment":{"testButton":"Test","testApiKeys":{"title":"Mollie Payments","apiKey":"API key","isValid":"is valid","isInvalid":"is invalid"}},"sw-customer":{"extendedInfo":{"labelPreferredIdealIssuer":"Preferred iDeal issuer"}}}')},RWJg:function(e,t){e.exports='{% block sw_order_detail_base_line_items_summary_entries %}\n    {% parent %}\n    <dt v-if="refundedItems > 0"><strong>{{ $tc(\'sw-order.detailExtended.totalRefunds\', 0, { quantity: refundedItems }) }}</strong></dt>\n    <dd v-if="refundedItems > 0"><strong>{{ refundedAmount | currency(order.currency.shortName) }}</strong></dd>\n    <dt v-if="shippedItems > 0"><strong>{{ $tc(\'sw-order.detailExtended.totalShipments\', 0, { quantity: shippedItems }) }}</strong></dt>\n    <dd v-if="shippedItems > 0"><strong>{{ shippedAmount | currency(order.currency.shortName) }}</strong></dd>\n{% endblock %}'},U7Ls:function(e,t){e.exports='{% block sw_order_line_items_grid_actions %}\n    {% parent %}\n    <sw-container class="sw-order-line-items-grid__actions-container"\n                  columns="1fr auto"\n                  gap="16px"\n                  v-show="!editable">\n\n        {% block sw_order_line_items_grid_line_item_filter %}\n            {% parent %}\n        {% endblock %}\n\n        {% block sw_order_line_items_grid_actions_actions %}\n            <div align="right">\n                hello\n            </div>\n        {% endblock %}\n    </sw-container>\n{% endblock %}\n\n{% block sw_order_line_items_grid_grid_actions %}\n    {% parent %}\n\n    <template #action-modals="{ item }">\n{#        <sw-modal v-if="showRefundModal === item.id"#}\n{#                  @modal-close="onCloseRefundModal"#}\n{#                  :title="$tc(\'mollie-payments.modals.refund.title\')"#}\n{#                  variant="small">#}\n{#            <p>#}\n{#                {{ $tc(\'mollie-payments.modals.refund.content\', 0, {#}\n{#                    quantity: item.quantity,#}\n{#                    refundableQuantity: refundableQuantity(item)#}\n{#                }) }}#}\n{#            </p>#}\n\n{#            <sw-number-field numberType="integer"#}\n{#                             size="medium"#}\n{#                             :step="1"#}\n{#                             :placeholder="$tc(\'mollie-payments.modals.refund.quantityPlaceholder\')"#}\n{#                             :min="0"#}\n{#                             :value="1"#}\n{#                             :max="refundableQuantity(item)"#}\n{#                             v-model="quantityToRefund">#}\n{#            </sw-number-field>#}\n\n{#            <template slot="modal-footer">#}\n{#                <sw-button @click="onCloseRefundModal" size="small">#}\n{#                    {{ $tc(\'mollie-payments.modals.refund.cancelButton\') }}#}\n{#                </sw-button>#}\n{#                <sw-button @click="onConfirmRefund(item)" variant="primary" size="small">#}\n{#                    {{ $tc(\'mollie-payments.modals.refund.confirmButton\') }}#}\n{#                </sw-button>#}\n{#            </template>#}\n{#        </sw-modal>#}\n\n        <sw-modal v-if="showShippingModal === item.id"\n                  @modal-close="onCloseShippingModal"\n                  :title="$tc(\'mollie-payments.modals.shipping.title\')"\n                  variant="small">\n            <p>\n                {{ $tc(\'mollie-payments.modals.shipping.content\', 0, {\n                    quantity: item.quantity,\n                    shippableQuantity: shippableQuantity(item)\n                }) }}\n            </p>\n\n            <sw-number-field numberType="integer"\n                             size="medium"\n                             :step="1"\n                             :placeholder="$tc(\'mollie-payments.modals.shipping.quantityPlaceholder\')"\n                             :min="0"\n                             :value="1"\n                             :max="shippableQuantity(item)"\n                             v-model="quantityToShip">\n            </sw-number-field>\n\n            <template slot="modal-footer">\n                <sw-button @click="onCloseShippingModal" size="small">\n                    {{ $tc(\'mollie-payments.modals.shipping.cancelButton\') }}\n                </sw-button>\n                <sw-button @click="onConfirmShipping(item)" variant="primary" size="small">\n                    {{ $tc(\'mollie-payments.modals.shipping.confirmButton\') }}\n                </sw-button>\n            </template>\n        </sw-modal>\n    </template>\n{% endblock %}\n\n{% block sw_order_line_items_grid_grid_actions_show %}\n    {% parent %}\n\n    <sw-context-menu-item :disabled="!isShippable(item)"\n                          icon="default-object-paperplane"\n                          @click="onShipItem(item)">\n        {{ $tc(\'mollie-payments.general.shipThroughMollie\') }}\n    </sw-context-menu-item>\n\n{#    <sw-context-menu-item :disabled="!isRefundable(item)"#}\n{#                          icon="default-arrow-360-left"#}\n{#                          @click="onRefundItem(item)">#}\n{#        {{ $tc(\'mollie-payments.general.refundThroughMollie\') }}#}\n{#    </sw-context-menu-item>#}\n{% endblock %}\n\n'},pPXn:function(e,t){e.exports="{% block sw_order_detail_base_secondary_info_payment %}\n    {% parent %}\n\n    <template v-if=\"mollieOrderId\">\n        <dt>{{ $tc('sw-order.detailExtended.labelMollieOrderId') }}</dt>\n        <dd>{{ mollieOrderId }}</dd>\n    </template>\n{% endblock %}"},vPx2:function(e,t){e.exports="{#{% sw_extends 'administration/module/sw-plugin/component/sw-plugin-config/sw-plugin-config.html.twig' %}#}\n\n{% block sw_plugin_config_actions_abort %}\n    {% parent %}\n\n    {% block sw_plugin_config_actions_test %}\n    <sw-button @click=\"onTestButtonClicked\" v-if=\"domain === 'MolliePayments.config'\">\n        {{ $tc('sw-payment.testButton') }}\n    </sw-button>\n    {% endblock %}\n{% endblock %}"},yhPD:function(e,t,n){"use strict";n.r(t);const i=Shopware.Classes.ApiService;var s=class extends i{constructor(e,t,n="mollie"){super(e,t,n)}testApiKeys(e={liveApiKey:null,testApiKey:null}){const t=this.getBasicHeaders();return this.httpClient.post(`_action/${this.getApiBasePath()}/config/test-api-keys`,JSON.stringify(e),{headers:t}).then(e=>i.handleResponse(e))}};const o=Shopware.Classes.ApiService;var l=class extends o{constructor(e,t,n="mollie"){super(e,t,n)}refund(e={itemId:null,versionId:null,quantity:null,createCredit:null}){const t=this.getBasicHeaders();return this.httpClient.post(`_action/${this.getApiBasePath()}/refund`,JSON.stringify(e),{headers:t}).then(e=>o.handleResponse(e))}total(e={orderId:null}){const t=this.getBasicHeaders();return this.httpClient.post(`_action/${this.getApiBasePath()}/refund/total`,JSON.stringify(e),{headers:t}).then(e=>o.handleResponse(e))}};const r=Shopware.Classes.ApiService;var a=class extends r{constructor(e,t,n="mollie"){super(e,t,n)}ship(e={itemId:null,versionId:null,quantity:null}){const t=this.getBasicHeaders();return this.httpClient.post(`_action/${this.getApiBasePath()}/ship`,JSON.stringify(e),{headers:t}).then(e=>r.handleResponse(e))}total(e={orderId:null}){const t=this.getBasicHeaders();return this.httpClient.post(`_action/${this.getApiBasePath()}/ship/total`,JSON.stringify(e),{headers:t}).then(e=>r.handleResponse(e))}};const{Application:d}=Shopware;d.addServiceProvider("MolliePaymentsConfigService",e=>{const t=d.getContainer("init");return new s(t.httpClient,e.loginService)}),d.addServiceProvider("MolliePaymentsRefundService",e=>{const t=d.getContainer("init");return new l(t.httpClient,e.loginService)}),d.addServiceProvider("MolliePaymentsShippingService",e=>{const t=d.getContainer("init");return new a(t.httpClient,e.loginService)});var u=n("yy0C"),p=n.n(u);const{Component:m}=Shopware;m.override("sw-customer-base-info",{template:p.a,computed:{preferredIdealIssuer(){return this.customer&&this.customer.customFields&&this.customer.customFields.mollie_payments&&this.customer.customFields.mollie_payments.preferred_ideal_issuer?this.customer.customFields.mollie_payments.preferred_ideal_issuer:null}}});var c=n("U7Ls"),h=n.n(c);const{Component:y,Service:f}=Shopware;y.override("sw-order-line-items-grid",{template:h.a,inject:["MolliePaymentsRefundService","MolliePaymentsShippingService"],data:()=>({isLoading:!1,selectedItems:{},showShippingModal:!1,createCredit:!1,quantityToShip:1,shippingQuantity:0}),computed:{getLineItemColumns(){const e=this.$super("getLineItemColumns");return e.push({property:"customFields.shippedQuantity",label:this.$tc("sw-order.detailExtended.columnShipped"),allowResize:!1,align:"right",inlineEdit:!1,width:"100px"}),e}},methods:{onShipItem(e){this.showShippingModal=e.id},onCloseShippingModal(){this.showShippingModal=!1},onConfirmShipping(e){this.showShippingModal=!1,this.quantityToShip>0&&this.MolliePaymentsShippingService.ship({itemId:e.id,versionId:e.versionId,quantity:this.quantityToShip}).then(document.location.reload()),this.quantityToShip=0},isShippable(e){let t=!1;return"product"===e.type&&void 0!==e.customFields&&null!==e.customFields&&void 0!==e.customFields.mollie_payments&&null!==e.customFields.mollie_payments&&void 0!==e.customFields.mollie_payments.order_line_id&&null!==e.customFields.mollie_payments.order_line_id&&(void 0===e.customFields.shippedQuantity||parseInt(e.customFields.shippedQuantity,10)<e.quantity)&&(t=!0),t},shippableQuantity:e=>void 0!==e.customFields&&void 0!==e.customFields.shippedQuantity&&void 0!==e.customFields.refundedQuantity?e.quantity-parseInt(e.customFields.shippedQuantity,10)-parseInt(e.customFields.refundedQuantity,10):void 0!==e.customFields&&void 0===e.customFields.shippedQuantity&&void 0!==e.customFields.refundedQuantity?e.quantity-parseInt(e.customFields.refundedQuantity,10):e.quantity}});var g=n("pPXn"),v=n.n(g);const{Component:w}=Shopware;w.override("sw-order-user-card",{template:v.a,computed:{mollieOrderId(){return this.currentOrder&&this.currentOrder.customFields&&this.currentOrder.customFields.mollie_payments&&this.currentOrder.customFields.mollie_payments.order_id?this.currentOrder.customFields.mollie_payments.order_id:null}}});var _=n("RWJg"),b=n.n(_);const{Component:S}=Shopware;S.override("sw-order-detail-base",{template:b.a,props:{orderId:{type:String,required:!0}},data:()=>({refundedAmount:0,refundedItems:0,shippedAmount:0,shippedItems:0}),inject:["MolliePaymentsRefundService","MolliePaymentsShippingService"],mounted(){""!==this.orderId&&(this.MolliePaymentsRefundService.total({orderId:this.orderId}).then(e=>{this.refundedAmount=e.amount,this.refundedItems=e.items}),this.MolliePaymentsShippingService.total({orderId:this.orderId}).then(e=>{this.shippedAmount=e.amount,this.shippedItems=e.items}))}});var M=n("vPx2"),I=n.n(M);const{Component:P,Mixin:C}=Shopware;P.override("sw-plugin-config",{template:I.a,inject:["MolliePaymentsConfigService"],mixins:[C.getByName("notification")],methods:{onTestButtonClicked(){let e=this;const t=document.querySelector('input[name="MolliePayments.config.liveApiKey"]'),n=document.querySelector('input[name="MolliePayments.config.testApiKey"]'),i=t?t.value:null,s=n?n.value:null;this.MolliePaymentsConfigService.testApiKeys({liveApiKey:i,testApiKey:s}).then(i=>{i.results,i.results.forEach((function(i){let s={title:e.$tc("sw-payment.testApiKeys.title"),message:`${e.$tc("sw-payment.testApiKeys.apiKey")} "${i.key}" (${i.mode}) ${!0===i.valid?e.$tc("sw-payment.testApiKeys.isValid"):e.$tc("sw-payment.testApiKeys.isInvalid")}.`},o="live"===i.mode?t:n;o&&o.parentNode.parentNode.classList.remove("has--error"),!0===i.valid?e.createNotificationSuccess(s):(e.createNotificationError(s),o&&o.parentNode.parentNode.classList.add("has--error"))}))})}}});var k=n("C7fN"),q=n("CrZb");const{Module:x}=Shopware;x.register("mollie-payments",{type:"plugin",name:"MolliePayments",title:"mollie-payments.general.mainMenuItemGeneral",description:"mollie-payments.general.descriptionTextModule",version:"1.0.0",targetVersion:"1.0.0",color:"#333",icon:"default-action-settings",snippets:{"de-DE":k,"en-GB":q}})},yy0C:function(e,t){e.exports='{% block sw_customer_base_metadata_default_payment %}\n    {% parent %}\n    <sw-description-list v-if="preferredIdealIssuer">\n        <dt class="sw-customer-base-info__label">{{ $tc(\'sw-customer.extendedInfo.labelPreferredIdealIssuer\') }}</dt>\n        <dd class="sw-customer-base__label-preferred-ideal-issuer">\n            {{ preferredIdealIssuer }}\n        </dd>\n    </sw-description-list>\n{% endblock %}'}},[["yhPD","runtime"]]]);