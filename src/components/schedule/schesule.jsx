import React, { useState } from 'react';
import { SegmentedControl, Chip, Group } from '@mantine/core'; // Replace with your actual component library

const FilmSchedule = ({ schedule }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Extract available dates from the schedule
    const availableDates = Array.from(new Set(schedule.map(item => item.date)));

    // Handle date selection
    const handleDateSelection = (date) => {
        setSelectedDate(date);
    };

    // Filter the schedule based on the selected date
    const filteredSchedule = selectedDate ? schedule.filter(item => item.date === selectedDate) : [];

    return (
        <div>
            <SegmentedControl fullWidth data={availableDates} onChange={handleDateSelection} />
            <Chip.Group>
                {filteredSchedule.map(item => (
                    <Group key={item.date} m="md">
                        <h2>{item.date}</h2>
                        {item.seances.map(seance => (
                            <div key={seance.time}>
                                <h3>{seance.hall.name}</h3>
                                <Chip color="violet" variant="light" value={`${item.date} ${seance.time}`}>
                                    {seance.time}
                                </Chip>
                            </div>
                        ))}
                    </Group>
                ))}
            </Chip.Group>
        </div>
    );
};

export default FilmSchedule;