<?php
/*
 * Copyright (c) 2023 LatePoint LLC. All rights reserved.
 */

/* @var $orders OsOrderModel[] */
/* @var $customer_name_query string */
?>
<?php



if ($orders) {
	foreach ($orders as $order) { ?>
		<tr class="os-clickable-row" <?php echo OsOrdersHelper::quick_order_btn_html($order->id); ?>>
			<td class="text-center os-column-faded"><?php echo $order->id; ?></td>
			<td>

				<?php if ($order->customer_id) { ?>

        <a class="os-with-avatar" target="_blank" <?php echo OsCustomerHelper::quick_customer_btn_html($order->customer->id); ?> href="#">
          <span class="os-avatar" style="background-image: url(<?php echo $order->customer->get_avatar_url(); ?>)"></span>
          <span class="os-name"><?php echo esc_html($order->customer->full_name); ?></span>
	        <i class="latepoint-icon latepoint-icon-external-link"></i>
        </a>
				<?php } else {
					echo 'n/a';
				} ?>
			</td>
			<td><?php echo OsMoneyHelper::format_price($order->total, true, false); ?></td>
			<td><span class="lp-order-status lp-order-status-<?php echo $order->status; ?>"><?php echo OsOrdersHelper::get_nice_order_status_name($order->status); ?></span>
			<td><span class="lp-order-status lp-order-status-<?php echo $order->payment_status; ?>"><?php echo OsOrdersHelper::get_nice_order_payment_status_name($order->payment_status); ?></span>
			<td><span class="lp-order-status lp-order-status-<?php echo $order->fulfillment_status; ?>"><?php echo OsOrdersHelper::get_nice_order_fulfillment_status_name($order->fulfillment_status); ?></span>
			<td><?php echo $order->confirmation_code; ?></td>
			<td><?php echo $order->created_at; ?></td>
		</tr>
		<?php
	}
} ?>