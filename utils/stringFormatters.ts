function formatNumberWithCommas(input: string): string {
    const parts = input.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export function formatLargeNumber(input: number | string | null): string {
    if (input == null) {
        return "Null";
    }

    // convert input to a number if it's a string
    const num = typeof input === "string" ? parseInt(input, 10) : input;

    return formatNumberWithCommas(num.toString());
}

export function formatPercentage(value: number | null): string {
    if (value == null) {
        return "Null";
    }

    return `${(value * 100).toFixed(2)}%`;
}

export function formatMoney(value: number | null): string {
    if (value == null) {
        return "Null";
    }

    const toString = `$${value.toFixed(2)}`;
    return formatNumberWithCommas(toString);
}

export function formatRetentionDuration(duration: { days: number, hours: number, minutes: number, seconds: number } | null): string {
    if (!duration) {
        return "Null";
    }
    return `${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes, ${duration.seconds} seconds`;
}

export function formatTrigger(trigger: string) {
    switch (trigger) {
        case "COMMAND":
            return "Command";
        case "JOIN":
            return "Join";
        case "FIRST_JOIN":
            return "First Join";
        case "PURCHASE":
            return "Purchase";
        case "PAPI":
            return "Placeholder";
        default:
            return "Unknown";
    }
}

export function formatInterval(seconds: number, longInterval = false): string {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.round(seconds % 60);
    if (longInterval) {
        let timeString = "";
        if (days > 0) {
            timeString += `${days}d `;
        }
        if (hours > 0 || days > 0) {
            timeString += `${hours}h `;
        }
        if (minutes > 0 || hours > 0 || days > 0) {
            timeString += `${minutes}m `;
        }
        timeString += `${remainingSeconds}s`;
        return timeString.trim();
    } else {
        let timeString = "";
        if (days > 0) {
            timeString += `${days}d `;
        }
        timeString += `${hours + days * 24}h ${minutes}m ${remainingSeconds}s`;
        return timeString.trim();
    }
}


