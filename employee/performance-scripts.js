document.addEventListener('DOMContentLoaded', function() {
    const dataFromDatabase = {
        projectsCompleted: 10,  
        yearsOfExperience: 5,   
        certifications: 3,      
        attendance: 95          
    };

    function createSemiCircularChart(ctx, value, colors) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [value, 100 - value],
                    backgroundColor: colors,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                rotation: -90,
                circumference: 180,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return value;
                            }
                        }
                    }
                },
                cutout: '70%', // Adjust this value to make the graph smaller
                layout: {
                    padding: 10
                }
            }
        });
    }

    createSemiCircularChart(document.getElementById('projectsCompletedChart').getContext('2d'), dataFromDatabase.projectsCompleted, ['#3498db', '#e0e0e0']);
    createSemiCircularChart(document.getElementById('yearsOfExperienceChart').getContext('2d'), dataFromDatabase.yearsOfExperience, ['#2ecc71', '#e0e0e0']);
    createSemiCircularChart(document.getElementById('certificationsChart').getContext('2d'), dataFromDatabase.certifications, ['#e67e22', '#e0e0e0']);
    createSemiCircularChart(document.getElementById('attendanceChart').getContext('2d'), dataFromDatabase.attendance, ['#e74c3c', '#e0e0e0']);
});
