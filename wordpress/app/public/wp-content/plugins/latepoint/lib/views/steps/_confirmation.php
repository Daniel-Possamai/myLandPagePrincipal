<?php
/**
 * @var $current_step_code string
 * @var $order OsOrderModel
 * @var $order_bookings array
 * @var $order_bundles array
 * @var $is_bundle_scheduling bool
 * @var $booking OsBookingModel
 */
?>
<div class="step-confirmation-w latepoint-step-content" data-step-code="<?php echo $current_step_code; ?>"
     data-next-btn-label="<?php echo OsStepsHelper::get_next_btn_label_for_step($current_step_code); ?>">
	<?php
	do_action('latepoint_before_step_content', $current_step_code);
	echo OsStepsHelper::get_formatted_extra_step_content($current_step_code, 'before');
	?>
	<?php if ($is_bundle_scheduling) { ?>
	<div class="bundle-scheduled-summary-lightbox">
		<div class="full-summary-wrapper">
			<?php do_action('latepoint_full_summary_before', $booking); ?>
			<div class="full-summary-head-info">
			  <?php do_action('latepoint_full_summary_head_info_before', $booking); ?>
			  <div class="full-summary-number"><?php _e('Confirmation #', 'latepoint'); ?> <strong><?php echo $booking->booking_code; ?></strong></div>
			  <div class="booking-full-summary-actions">
				  <div class="add-to-calendar-wrapper">
				    <a href="#" class="open-calendar-types ical-download-btn"><i class="latepoint-icon latepoint-icon-calendar"></i><span><?php _e('Add to Calendar', 'latepoint'); ?></span></a>
					  <?php echo OsBookingHelper::generate_add_to_calendar_links($booking, $key ?? ''); ?>
				  </div>
			    <a href="<?php echo $booking->get_print_link($key ?? ''); ?>" class="print-booking-btn" target="_blank"><i class="latepoint-icon latepoint-icon-printer"></i><span><?php _e('Print', 'latepoint'); ?></span></a>
			  </div>
			  <?php do_action('latepoint_full_summary_head_info_after', $booking); ?>
			</div>
			<div class="full-summary-info-w">
				<div class="booking-summary-main-section">
					<?php
					echo '<div class="summary-box-wrapper">';
						echo OsBookingHelper::generate_summary_for_booking($booking, false);
						echo '<div class="booking-summary-info-w">';
							echo '<div class="summary-boxes-columns">';
								if (OsAgentHelper::count_agents() > 1)  OsAgentHelper::generate_summary_for_agent($booking);
								OsLocationHelper::generate_summary_for_location($booking);
								OsCustomerHelper::generate_summary_for_customer($order->customer);
							echo '</div>';
						echo '</div>';
					echo '</div>';
					do_action('latepoint_booking_summary_before_price_breakdown', $order);
					?>
				</div>
				<?php echo '<div class="part-of-bundle-message">' . __('This booking is part of a bundle.', 'latepoint') . ' <a href="#" ' . OsCustomerHelper::generate_bundle_scheduling_btn($booking->order_item_id) . '>' . __('Show Details', 'latepoint') . '</a></div>'; ?>
			</div>
		</div>
	</div>
	<?php } else { ?>
		<?php do_action('latepoint_step_confirmation_before', $order); ?>
		<div class="confirmation-head-info">
			<?php do_action('latepoint_step_confirmation_head_info_before', $order); ?>
			<div class="confirmation-number">
                    <div><?php _e('Confirmation #', 'latepoint'); ?></div>
                    <strong><?php echo $order->confirmation_code; ?></strong>
            </div>
			<div class="booking-confirmation-actions">
				<?php if ($order->is_single_booking()) { ?>
					<div class="add-to-calendar-wrapper">
						<a href="#" class="open-calendar-types ical-download-btn"><i
								class="latepoint-icon latepoint-icon-calendar"></i><span><?php _e('Add to Calendar', 'latepoint'); ?></span></a>
						<?php echo OsBookingHelper::generate_add_to_calendar_links(reset($order_bookings)); ?>
					</div>
				<?php } ?>
				<a href="<?php echo $order->get_print_link(); ?>" class="print-booking-btn" target="_blank"><i
						class="latepoint-icon latepoint-icon-printer"></i><span><?php _e('Print', 'latepoint'); ?></span></a>
			</div>
			<?php do_action('latepoint_step_confirmation_head_info_after', $order); ?>
		</div>
		<div class="confirmation-info-w">
			<?php include('partials/_order_summary.php'); ?>
		</div>
		<?php
		// Tracking code
		if (!empty(OsSettingsHelper::get_settings_value('confirmation_step_tracking_code', ''))) {
			echo '<div style="display: none;">' . OsReplacerHelper::replace_tracking_vars(OsSettingsHelper::get_settings_value('confirmation_step_tracking_code'), $order) . '</div>';
		}
		?>
		<?php
		// show "create account" prompt where they can set a password for their account
		if (!empty($customer) && $customer->is_guest && (OsSettingsHelper::get_settings_value('steps_hide_registration_prompt') != 'on') && !OsSettingsHelper::is_on('steps_hide_login_register_tabs')) { ?>
			<div class="step-confirmation-set-password">
				<div class="set-password-fields">
					<?php echo OsFormHelper::password_field('customer[password]', __('Set Your Password', 'latepoint')); ?>
					<a href="#" class="latepoint-btn latepoint-btn-primary set-customer-password-btn"
					   data-btn-action="<?php echo OsRouterHelper::build_route_name('customer_cabinet', 'set_account_password_on_booking_completion'); ?>"><?php _e('Save', 'latepoint'); ?></a>
				</div>
				<?php echo OsFormHelper::hidden_field('account_nonse', $customer->account_nonse); ?>
			</div>
			<div class="confirmation-cabinet-info">
				<div
					class="confirmation-cabinet-text"><?php _e('You can now manage your appointments in your personal cabinet', 'latepoint'); ?></div>
				<div class="confirmation-cabinet-link-w">
					<a href="<?php echo OsSettingsHelper::get_customer_dashboard_url(); ?>" class="confirmation-cabinet-link"
					   target="_blank"><?php _e('Open My Cabinet', 'latepoint'); ?></a>
				</div>
			</div>
			<div class="info-box text-center">
				<?php _e('Did you know that you can create an account to manage your reservations and schedule new appointments?', 'latepoint'); ?>
				<div class="info-box-buttons">
					<a href="#" class="show-set-password-fields"><?php _e('Create Account', 'latepoint'); ?></a>
				</div>
			</div>
		<?php } ?>
	<?php } ?>
	<?php
	echo OsStepsHelper::get_formatted_extra_step_content($current_step_code, 'after');
	do_action('latepoint_after_step_content', $current_step_code);
	?>
</div>