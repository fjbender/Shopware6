<?php

namespace Kiener\MolliePayments\Setting;

use DateTime;
use Exception;
use Kiener\MolliePayments\Handler\Method\BankTransferPayment;
use Shopware\Core\Framework\Struct\Struct;

class MollieSettingStruct extends Struct
{
    private const ORDER_EXPIRES_AT_MIN_DAYS = 1;
    private const ORDER_EXPIRES_AT_MAX_DAYS = 100;

    /**
     * @var string
     */
    protected $liveApiKey;

    /**
     * @var string
     */
    protected $testApiKey;

    /**
     * @var bool
     */
    protected $testMode = true;

    /**
     * @var bool
     */
    protected $debugMode = false;

    /**
     * @var int
     */
    protected $paymentMethodBankTransferDueDateDays;

    /**
     * @var int
     */
    protected $orderLifetimeDays;

    /**
     * @return string
     */
    public function getLiveApiKey(): string
    {
        return $this->liveApiKey;
    }

    /**
     * @param string $liveApiKey
     *
     * @return self
     */
    public function setLiveApiKey(string $liveApiKey): self
    {
        $this->liveApiKey = $liveApiKey;
        return $this;
    }

    /**
     * @return string
     */
    public function getTestApiKey(): string
    {
        return $this->testApiKey;
    }

    /**
     * @param string $testApiKey
     *
     * @return self
     */
    public function setTestApiKey(string $testApiKey): self
    {
        $this->testApiKey = $testApiKey;
        return $this;
    }

    /**
     * @return bool
     */
    public function isTestMode(): bool
    {
        return $this->testMode;
    }

    /**
     * @param bool $testMode
     *
     * @return self
     */
    public function setTestMode(bool $testMode): self
    {
        $this->testMode = $testMode;
        return $this;
    }

    /**
     * @return bool
     */
    public function isDebugMode(): bool
    {
        return $this->debugMode;
    }

    /**
     * @param bool $debugMode
     *
     * @return self
     */
    public function setDebugMode(bool $debugMode): self
    {
        $this->debugMode = $debugMode;
        return $this;
    }

    /**
     * @return int
     */
    public function getPaymentMethodBankTransferDueDateDays(): int
    {
        return min(
            max(
                BankTransferPayment::DUE_DATE_MIN_DAYS,
                $this->paymentMethodBankTransferDueDateDays
            ),
            BankTransferPayment::DUE_DATE_MAX_DAYS
        );
    }

    /**
     * @return string The Due date in YYYY-MM-DD format
     * @throws Exception
     */
    public function getPaymentMethodBankTransferDueDate(): string
    {
        return (new DateTime())
            ->modify(sprintf('+%d day', $this->getPaymentMethodBankTransferDueDateDays()))
            ->format('Y-m-d');
    }

    /**
     * @return int
     */
    public function getOrderLifetimeDays(): int
    {
        return min(
            max(
                self::ORDER_EXPIRES_AT_MIN_DAYS,
                $this->orderLifetimeDays
            ),
            self::ORDER_EXPIRES_AT_MAX_DAYS
        );
    }

    /**
     * @return string
     * @throws Exception
     */
    public function getOrderLifetimeDate(): string
    {
        return (new DateTime())
            ->modify(sprintf('+%d day', $this->getOrderLifetimeDays()))
            ->format('Y-m-d');
    }
}